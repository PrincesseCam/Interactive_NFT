# 🖼️ Interactive NFT in the Metaverse

<div align="center">
  <img src="https://img.shields.io/badge/Ethereum-Smart%20Contracts-blue" alt="Ethereum">
  <img src="https://img.shields.io/badge/IPFS-Decentralized%20Storage-yellow" alt="IPFS">
  <img src="https://img.shields.io/badge/Status-Completed-brightgreen" alt="Status">
  <img src="https://img.shields.io/badge/Languages-Solidity%2C%20JavaScript-orange" alt="Languages">
</div>

Interactive NFTs offer a new paradigm of user engagement in the blockchain space by incorporating dynamic features such as avatar animations, real-time interactivity, and customizability. This project demonstrates the creation of interactive NFTs integrated into the **Metaverse**, leveraging **Ethereum Blockchain**, **IPFS**, and **3D modeling tools**.

---

## 🧐 About the Project

This project introduces **Interactive NFTs**, which allow users to interact with avatars in a 3D space, rotate objects, and experience dynamic animations. It is a fully implemented project that:
- Utilizes **Solidity** for smart contract development.
- Stores metadata using **IPFS** via **Pinata Cloud**.
- Integrates **3D animated avatars** using tools like Blender and Mixamo.
- Deploys NFTs on the **Ethereum Goerli Testnet** and displays them on **OpenSea**.

---

## 🛠️ Features

- **Dynamic NFTs**: Includes animations and interactivity that enrich the user experience.
- **Decentralized Storage**: NFT metadata is securely stored on IPFS for long-term availability.
- **3D Integration**: Supports 3D avatars with custom animations.
- **Testnet Deployment**: Works on Ethereum’s Goerli Testnet, avoiding real costs during testing.
- **Marketplace Integration**: Compatible with NFT marketplaces like OpenSea.

---

## 🎨 Demo

Check out the deployed NFTs on OpenSea:
- [NFT 1](https://testnets.opensea.io/fr/assets/goerli/0xcb7033e4906de74cb87cdf0d2b61151c972e1938/1)
- [NFT 2](https://testnets.opensea.io/fr/assets/goerli/0x149d1c6edfdf840000a59150323ddeae196d8b42/2)

**Screenshots:**
![NFT Preview](https://via.placeholder.com/800x400?text=NFT+Preview)

---

## 🚀 Getting Started

### Prerequisites
Ensure you have the following tools installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MetaMask Wallet](https://metamask.io/)
- [Pinata Cloud](https://www.pinata.cloud/) account for IPFS integration

### Installation
Clone this repository:
```bash
git clone https://github.com/PrincesseCam/Interactive_NFT.git
cd Interactive_NFT
```
Install dependencies:
```bash
npm install
```

### Usage
1. **Open Remix IDE** in your browser: [Remix](https://remix.ethereum.org/).
2. **Import** the Solidity smart contract (`NFTContract.sol`) from this repository.
3. **Compile and deploy** the contract on the **Goerli Testnet**.
4. **Add metadata** to IPFS via **Pinata Cloud**.
5. **Interact with your NFT** on **OpenSea Testnet**.

---

## 🛠️ Development Workflow

### Tools Used:
- **Solidity**: Smart contract development
- **Remix IDE**: Writing and deploying contracts
- **Three.js**: 3D rendering library for interactivity
- **Blender**: 3D modeling and avatar animation
- **Mixamo**: Adding pre-built animations to 3D avatars
- **Pinata**: Uploading metadata and media to IPFS
- **MetaMask**: Wallet integration for transactions

---

## 📁 Project Structure
Interactive_NFT/
├── contracts/
│   └── NFTContract.sol    # Smart contract for the NFT
├── metadata/
│   └── metadata.json      # JSON metadata for the NFTs
├── src/
│   └── index.html         # Demo website for showcasing the NFT
├── assets/
│   ├── avatar.glb         # 3D model of the avatar
│   ├── animation.glb      # Animation files
│   └── images/            # Preview images
├── package.json           # Project dependencies
└── README.md              # Project documentation

## 📚 Documentation

### NFT Metadata Example
Below is a sample metadata structure used in the project:  
```json
{
  "name": "Interactive Avatar",
  "description": "An interactive NFT for the metaverse",
  "image": "ipfs://<HASH>/avatar.png",
  "animation_url": "ipfs://<HASH>/avatar_animation.glb",
  "external_url": "https://princessecamwebsite.com"
}
```

### Smart Contract Overview
The smart contract supports the following functionalities:
- **Minting**: Creating new NFTs.
- **Burning**: Destroying NFTs.
- **Metadata Management**: Linking NFTs to IPFS URIs.

## 👩‍💻 Author
**Camille Kabore**  
- [LinkedIn](https://linkedin.com/in/camille-kabore)  

## 📜 License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## 🌟 Acknowledgments
Special thanks to **Blender**, **Mixamo**, and **Pinata** for their amazing tools.  

References:
- [Ethereum Improvement Proposals (EIPs)](https://eips.ethereum.org/EIPS/eip-1155)
- [IPFS Documentation](https://docs.ipfs.tech/)
