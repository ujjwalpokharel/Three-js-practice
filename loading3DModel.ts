import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"


const scene: THREE.Scene = new THREE.Scene();
const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// const geometry: THREE.BoxGeometry = new THREE.BoxGeometry(2,2,2);
// const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
// const cube: THREE.Mesh = new THREE.Mesh(geometry, material)
// scene.add(cube);
camera.position.z = 50;

// const  animate=()=>{
//     requestAnimationFrame(animate);
//     cube.rotation.x+=0.1;
//     cube.rotation.y+=0.1;
//     camera.position.z-=0.5;
//     renderer.render(scene,camera) 
// }
// animate();






const loader = new GLTFLoader();

loader.load('/employee.glb', function (gltf) {

    scene.add(gltf.scene);
    renderer.render(scene, camera)
}, undefined, function (error) {

    console.error(error);

});