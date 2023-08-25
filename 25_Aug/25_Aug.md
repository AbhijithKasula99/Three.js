# Three.js

## Cameras

- There are 6 types of cameras and those are:

1. Camera
2. ArrayCamera
3. CubeCamera
4. OrthographicCamera
5. PerspectiveCamera
6. StereoCamera

- **Camera** class cannot be used directly and the rest of the cameras are inherited from them.

- **ArrayCamera** can be used to render the scene from multiple cameras on specific areas of the render.

- **StereoCamera** can be used to render the scene through two cameras that mimic the eyes to create the parallax effect.

- **CubeCamera** does the render for each one facing a different direction.

- **OrthographicCamera** does the render of the scene without any perspective.

- **PerspectiveCamera** is the most common one with max parameters.

```
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
```

- Here is the command for initializing the camera and the parameter **75** is known as field of view **FOV**.

![FOV of 75](image.png)

- _FOV of 75_

![FOV of 105](image-1.png)

- _FOV of 105_

- **Continue from 14th min.**
