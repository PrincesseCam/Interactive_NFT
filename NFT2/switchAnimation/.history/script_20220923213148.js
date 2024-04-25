import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';
import {FBXLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';
import {GLTFLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';


var scene, camera, renderer, clock, mixer, actions, anims;


init();

function init(){
  
  clock = new THREE.Clock();
  
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x00aaff);
  
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
  
  anims = ['Cheers', 'Jump', 'Dance'];
  const loader = new FBXLoader();
  loader.setPath('./Avatar/');
  loader.load('untitled.fbx', (fbx) => {
    mixer = new THREE.AnimationMixer((fbx));
    actions = [];
    const action = this._mixer.clipAction((fbx).animations[0]);
    action.play();
    actions.push(action);
    const map = new THREE.TextureLoader()
    const texture = loader.load([
        './Avatar/image_0.jpg',
        './Avatar/image_1.jpg',
        './Avatar/image_11.jpg',
        './Avatar/image_12.jpg',
        './Avatar/image_14.jpg',
        './Avatar/image_2.png',
        './Avatar/image_3.jpg',
        './Avatar/image_4.jpg',
        './Avatar/image_5.jpg',
        './Avatar/image_6.jpg',
        './Avatar/image_8.jpg',
        './Avatar/image_9.jpg',
    ])
    
    fbx.scale.setScalar(1);
    fbx.traverse(c => {
        c.castShadow = true;
      });
    scene.add((fbx));
    
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
  
  loader.load(`untitled${anim}.fbx`, (fbx) => {
    const action = mixer.clipAction((fbx).animations[0]);
    if (anim=='Cheers'){
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