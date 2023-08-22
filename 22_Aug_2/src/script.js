import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Scaling the mesh
mesh.scale.x = 2
mesh.scale.y = 0.5
mesh.scale.z = 0.5
// Alternative mesh.scale.set(2,0.5,0.5)

// Rotating the mesh

mesh.rotation.z = 0.95

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.y = 0
camera.position.x = 0

/* camera.position.set(1,0,2)  Alternative */ 

// Axes Helper
const axesHelper = new THREE.AxesHelper()
// As this is an object we need to add it to the scene too so we can do it by
scene.add(axesHelper)

scene.add(camera)

// Distance between object and center
console.log(mesh.position.length())

// Distance between camera and object
console.log(mesh.position.distanceTo(camera.position))


// Multiple Cubes

const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: '#00ff00'})
)
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: '#ffffff'})
)
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: '#fff000'})
)
group.add(cube3)

cube2.position.x = 1
cube3.position.x = 0
cube1.position.x = -1

// Moving the group
group.position.y = 1

// Rotating the group
group.rotation.y = 1

// Scaling the group
group.scale.y = 2

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)