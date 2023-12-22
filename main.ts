import * as THREE from "three";
import{OrbitControls} from "three/examples/jsm/controls/OrbitControls"
const scene: THREE.Scene = new THREE.Scene();
const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const orbit =new OrbitControls(camera,renderer.domElement)
orbit.update()
const geometry: THREE.BoxGeometry = new THREE.BoxGeometry(2,2,2);
const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const cube: THREE.Mesh = new THREE.Mesh(geometry, material)
scene.add(cube);
camera.position.set(0,2,15)
const axesHelper =new THREE.AxesHelper(15)
scene.add(axesHelper)
const  animate=()=>{
    requestAnimationFrame(animate);
    cube.rotation.x+=0.1;
    cube.rotation.y+=0.1;
   
    renderer.render(scene,camera) 
}
animate();