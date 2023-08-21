# Three.js

## Basic Setup

- This is something like setting up a studio for shoot, we decide on the how the model should be, lighting, type of camera, motion of objects and camera and render the animation.

- All of this must be done using js code using the necessary functions and classes of three.js.

## Creating a red cube and placing it in the scene

- First create a **html** file and then link the **javascript** file to this file to the html file.
- Download the file from the [three.js](https://threejs.org/) site.
- Take three.min.js file and put it to the directory where your html and js file is present.
- Import three.min.js before your javascript file where you script the code.
- This is how your html code will look like.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./three.min.js"></script>
    <script src="./script.js"></script>
  </body>
</html>
```

- To create a basic scene we need 4 elements and those are:

1. A scene that will have objects
2. The objects
3. Camera
4. Renderer

- As everything is happening on the scene so create it so create that first. We can do it by writing the code in [script.js](../21_Aug/script.js)

```
// Creating a Scene
const scene = new THREE.Scene()
```

- Now that the scene has been created now create an object so we will be creating a cube
- Define the **Geometry** and **Material** and then put it into **Mesh**, then using **.add()** method add the mesh to the scene using this code.

```
// Creating an object
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:'#ff0000'})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)
```

- Now we need to add the camera to the scene so we can do it by:

```
// Defining the Camera
const camera = new THREE.PerspectiveCamera()
scene.add(camera)
```

- There are many cameras but now we can do it using Perspective Camera.
- We need to define the aspect ratio of the render output and we can do it by:

```
// Aspect Ratio
const sizes = {
    width: 800,
    height: 600
}
```

- We need to alter the camera code to define the aspect ratio too so the altered code will look like:

```
// Aspect Ratio
const sizes = {
    width: 800,
    height: 600
}

// Defining the Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
scene.add(camera)

// 75 is the angle and ratio of width and height is the aspect ratio.
```

- If we use the webgl class we need to define it in the html file using <canvas> tag. Now the html code would look like this:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <canvas class="webgl"></canvas>
    <script src="./three.min.js"></script>
    <script src="./script.js"></script>
  </body>
</html>
```

- Now we need to define the renderer:
- We import canvas using DOM method and add it to the renderer,

```
const canvas = document.querySelector('.webgl')

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
```

- Now render the scene and camera using

```
renderer.render(scene, camera);
```

- The camera is inside the cube, to move it backwards we can do it by using these properties and those are

1. Position
2. Rotation
3. Scale

- The axis to zoom in and out of the screen is Z axis and then use it accordingly.

```
camera.position.z = 3
```

- This is how the final html and JS code is:

```
HTML Code

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <canvas class="webgl"></canvas>
    <script src="./three.min.js"></script>
    <script src="./script.js"></script>
  </body>
</html>
```

```
JS Code

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
```
