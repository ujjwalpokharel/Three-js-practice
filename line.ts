import * as THREE from "three";
/**
 * create Scene for object
 */
const scene: THREE.Scene = new THREE.Scene();

/**
 * create camera for showing object  
 * seting camera position
 * seting where should camera look
 */
const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 100, 500)
camera.position.set(0, 0, 100)
camera.lookAt(0, 0, 0)
/**
 * create renderer to render object
 * set renderer size
 * adding object to dom element
 */
const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

/**
 * making material and geomerty for object
 */
const material =new THREE.LineBasicMaterial({color:0xffffff})
const points:THREE.Vector3[]=[];
points.push(new THREE.Vector3(-10,0,0))
points.push(new THREE.Vector3(-20,20,0))
points.push(new THREE.Vector3(-10,0,30))
const geomerty:THREE.BufferGeometry =new THREE.BufferGeometry().setFromPoints(points)
/**
 * creating line object
 */
const line:THREE.Line =new THREE.Line(geomerty,material)

/**
 * adding line to scene
 */
scene.add(line)
/**
 * rendering line
 */
const animate= ()=>{
    requestAnimationFrame(animate);
    line.rotation.z+=0.05;
    renderer.render(scene,camera)

}
animate()
