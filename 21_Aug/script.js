// Creating a Scene
const scene = new THREE.Scene()

// Creating an object
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:'#fefae0'})
const mesh = new THREE.Mesh(geometry, material)

// Aspect Ratio
const sizes = {
    width: 800,
    height: 600
}

// Defining the Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 5
camera.position.x = 3
scene.add(camera)

// We import canvas using DOM method and add it to the renderer
const canvas = document.querySelector('.webgl')

// Defining the Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height)

// Render the setup 
renderer.render(scene, camera);