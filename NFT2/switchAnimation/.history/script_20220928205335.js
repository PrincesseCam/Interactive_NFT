import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';
import {FBXLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';
import {GLTFLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';


var scene, camera, renderer, clock, mixer, actions, anims;


init();

function init(){
  
  clock = new THREE.Clock();
  
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x1D002A);
  
  camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 1000 );
  camera.position.set(-1, 50, 250);
  
  const ambient = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
  scene.add(ambient);
  
  const light = new THREE.DirectionalLight(0xFFFFFF, 1);
  light.position.set( 0, 1, 10);
  scene.add(light);
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  
  const controls = new OrbitControls( camera, renderer.domElement );
  controls.target.set(1,50,0);
  controls.update();
  
  //Add button actions here
  let index = 0;
  const btns = document.getElementById("btns");
  btns.childNodes.forEach( btn => {
    if (btn.innerHTML !== undefined){
      btn.addEventListener('click', 
        playAction.bind(this, index)
      );
      index++;
    }
  });
  
  //Load meshes here
  
  const loader = new FBXLoader();
  loader.setPath('./Avatar/');
  loader.load('Breathing Idle.fbx', (fbx) => {
    (fbx).scale.set(0.7, 0.7, 0.7)
    mixer = new THREE.AnimationMixer((fbx));
    actions = [];
    const action = mixer.clipAction((fbx) .animations[0]);
    action.play();
    actions.push(action);
    const map = new THREE.TextureLoader()
    .setPath('./Avatar/Textures')
    //.load('image_0.jpg');
    (fbx).traverse( child => {
      if (child.isMesh){
        child.material.map = map;
        child.material.needsUpdate = true;
      }
    });
    
    scene.add((fbx));
    anims = ['Idle','Hand', 'Run', 'Walk']; 
    loadAnimation(loader);
    });
  
  window.addEventListener( 'resize', resize, false);
  
}

function playAction(index){
  const action = actions[index];
  mixer.stopAllAction();
  action.reset();
  action.fadeIn(0.5);
  action.play();
}

function loadAnimation(loader){
  const anim = anims.shift();
  
  loader.load(`Hand Raising.fbx`, object  => {
    const action = mixer.clipAction(object.animations[0]);
    if (anim=='Hand'){
      action.loop = THREE.LoopOnce;
      action.clampWhenFinished = true;
    }
    actions.push(action);
    if (anims.length>0){
      loadAnimation(loader);
    }else{
      update();
    }
  })
  loader.load(`Running.fbx`, object  => {
    const action = mixer.clipAction(object.animations[0]);
    if (anim=='Run'){
      action.loop = THREE.LoopOnce;
      action.clampWhenFinished = true;
    }
    actions.push(action);
    if (anims.length>0){
      loadAnimation(loader);
    }else{
      update();
    }
  })
  
}

function update(){
  requestAnimationFrame( update );
	renderer.render( scene, camera );
  const dt = clock.getDelta();
  mixer.update(dt);
}

function resize(){
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}