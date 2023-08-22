# Three.js

## Transforming Objects

- There are 4 ways to transform an object and those are by:

1. Position
2. Scale
3. Rotation
4. Quaternion

- All the code is in the src folder and we can use it and to start the process. In the command line type these 2 commands:

```
npm install
npm run dev
```

- Automatically all the code will be live on **vite**.

- We can alter the direction by altering the camera position axis:

- By altering the x axis we can move the camera left and right.

```
camera.position.x = 3
```

- By altering the y axis we can move the camera far and near like a zoom in and out.

```
camera.position.y = 3
```

- By altering the z axis we can move the camera up and down.

```
camera.position.z = 3
```

- The units are **arbitary** that means the units are unspecified, it can be m, cm, km or anything. So use it accordingly.

- All the changes must happen before the render, after render step nothing will be reflected.

- To determine the distance between the center and the object, we can do it by:

```
console.log(mesh.position.length())
```

- To determine the distance between camera and object, we can do it by:

```
console.log(mesh.position.distanceTo(camera.position))
```

- Be careful while organizing your code, don't try to determine anything before creating or initializing it.

- Instead of writing a lengthy multiple lines of code we can make it into single line by:

```
camera.position.z = 2
camera.position.y = 0
camera.position.x = 1

camera.position.set(2,0,1)
```

- We have origin marker in the CAD software, if we want to have something like that in our canvas we can do it by:

```
const axesHelper = new THREE.AxesHelper()
// As this is an object we need to add it to the scene too so we can do it by
scene.add(axesHelper)
```

- We can scale our models using scale command, we need to define the axis on which we want to scale.

```
mesh.scale.x = 2
mesh.scale.y = 0.5
mesh.scale.z = 0.5

mesh.scale.set(2,0.5,0.5)
```

- We can rotate the object using rotate or quaternion command, for one half rotation we need to reach pi ~ 3.14159.

```
mesh.rotation.x = 0.5
mesh.rotation.y = 0.5
mesh.rotation.z = 0.5

mesh.rotation.z = Math.PI * 0.25
```

- Be very careful with rotation, it computes based on 'XYZ' by default now we can change that by:

```
mesh.rotation.reorder('YXZ')
```

- Now the Y-axis will be given first preference followed by X and Z. This should come above rotation declaration. Both rotation and quaternion are interlinked if changes are made in any one of them it is automatically reflected on the other.

- The order of position, scale and rotation can be random.

- Just like elements and assembly in CAD we can create groups that can be used to bring a set of objects together that can undergo changes in one go of commands.

- There is an alternative way to create the cubes and add it into the group,

```
const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1)
    new THREE.MeshBasicMaterial({color: '#00ff00'})
)
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1)
    new THREE.MeshBasicMaterial({color: '#0000ff'})
)
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1)
    new THREE.MeshBasicMaterial({color: '#ff0000'})
)
group.add(cube3)
```

- Now we can alte the entire group using the group command, for example:

- If you want to move all the cubes

```
group.position.y = 1
```

- Rotating the group

  > group.rotation.y = 1

- Scaling the group

  > group.scale.y = 2

- The entire code will look like this:

```
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
```
