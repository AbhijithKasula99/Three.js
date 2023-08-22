# Three.js

- **Webpack** was the build tool that was popular here but we will be using **Vite** along with **NodeJS**.

- NodeJS can be downloaded and installed conventionally,using that we can install the necessary packages and dependencies. The command for it is:

  > npm install

- But I did install vice using:

  > npm install --save-dev vite

  > npx vite

- You will get a URL in the command line and you can click on it to access the page.

- Now that the **Vite** is installed we don't need to import the **three.min.js** file we can use **Vite** to import the module.

```
import * as THREE from 'three'
```

- Vite is a wonderful thing as a live server but it is not working well on my pc, stick to the conventional way by importing **three.min.js** everytime.

So the final steps are:

- npm install three
- npm install --save-dev vite
- npx vite

- As we will not be using vite just install **three** using _npm install three_.

---
