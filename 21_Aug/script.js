// Creating a Scene
//const scene = new THREE.Scene();

// Creating an object
//const geometry = new THREE.BoxGeometry(1,1,1)
//const material = new THREE.MeshBasicMaterial({color:'#fefae0'})
//const mesh = new THREE.Mesh(geometry, material)
//const cubeMesh = new THREE.Mesh(geometry, materialaterial)
//scene.add(cubeMesh)

// Aspect Ratio
//const sizes = {
    //width: 800,
  //  height: 600
//}

// Defining the Camera
//const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
//camera.position.z = 10
//camera.position.x = 3
//scene.add(camera)

// We import canvas using DOM method and add it to the renderer
// const canvas = document.querySelector('canvas.webgl')

// Defining the Renderer
//const renderer = new THREE.WebGLRenderer({
   // canvas: canvas
// });
// renderer.setSize(sizes.width, sizes.height)

// Render the setup 
// renderer.render(scene, camera);

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()

// Object
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterial = new THREE.MeshBasicMaterial({
    color: '#ff0000'
})
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
scene.add(cubeMesh)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)