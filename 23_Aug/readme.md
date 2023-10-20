# Three.js

## Animation

- We will be using **requestAnimationFrame** to call a function on the next frame. Yes, this is like a video FPS as it is a visual.

- **requestAnimationFrame** does not do animation, people misunderstand that this is used for animation.

- We can create the function using

```
const tick = () =>
{
    console.log('tick')

    window.requestAnimationFrame(tick)
}

tick() // Calling the function
// Now this function is running at 60 FPS.
```

- Now for each tick the renderer must increase the cube motion. The code will be altered to

```
const tick = () =>
{
    // Update the position
    mesh.position.x += 0.01

    // Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick() // Calling the function
// Now this function is running at 60 FPS.
```

- To get a timestamp we can do that using

```
const time = Date.now()
console.log(time)
```

- If we want to make the object to have a motion at a same speed regardless of the frame rate then,

```
let time = Date.now()

const tick = () =>
{
    const currentTime = Date.now()
    const deltaTime = currentTime - time
    time = currentTime

    mesh.rotation.x += 0.001 * deltaTime

    // Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}
```

- There is a built-in solution called **Clock** that can be used to do the same thing. The code would be:

```
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update the position
    mesh.position.x = elapsedTime

    // Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick() // Calling the function
```

- If you want one revolution per second then,

```
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update the rotation
    mesh.rotation.x = elapsedTime * Math.PI * 2

    // Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick() // Calling the function
```

- If you want the object to move through an oscillatory motion, we can use **Math.sin(elapsedTime)**.

```
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update the position
    mesh.position.x = Math.sin(elapsedTime)

    // Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick() // Calling the function
```

- To move the object in circular motion

```
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update the position
    mesh.position.y = Math.sin(elapsedTime)
    mesh.position.x = Math.cos(elapsedTime)

    // Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick() // Calling the function
```

- We can keep the cube stationery and make the camera move around it by usinf **lookAt()**.

```
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update the position
    camera.position.y = Math.sin(elapsedTime)
    camera.position.x = Math.cos(elapsedTime)
    camera.lookAt(mesh.position)

    // Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick() // Calling the function
```

- **GSAP** is a famous library that can be used to control and create timelines. To install that we can do it by:

```
npm install --save gsap@3.5.1
```

- By adding _--save_ this package will be in **.json** file. We can simply import it by:

```
import gsap from 'gsap
```

- We can use GSAP using **to()** method and here is an example.

```
gsap.to(mesh.position{ duration: 1, delay: 1, x: 2})
```

- GSAP is known as GreenSock Animation Platform.
