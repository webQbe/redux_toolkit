# Redux Toolkit

**Implementing Redux Toolkit for Global State Management with React**

- Redux is the original global state manager for React
- It allows you to manage your app's state in a single place
- Now the creators of Redux offers Redux Toolkit
- Redux Toolkit is intended to be the standard way to write Redux logic 
- It is the modern application of Redux that you should learn how to implement
- Redux Toolkit addresses several common complaints about Redux. Including:
    - *Complex store configuration*
    - *Too many added packages*
    - *Too much code to implement*

## Getting Started 

### Create React App

1. Download and Install **Node.js**
2. Open project folder in VSCode Integrated Terminal

3. Install Vite on terminal:
    - Run `npm create vite@latest .`
    - Select `React` & Enter
    - Select `JavaScript` & Enter

4. Update `vite.config.js` file:
    - Add `server` to `defineConfig()`:
        ```
        server: { 
            port: 3000
        }
        ```
        
5. Install dependencies: Open terminal and run `npm install`

6. Install packages:
    1.  **`Redux Toolkit`:** `npm i @reduxjs/toolkit react-redux` 

7. Delete: `public/vite.svg`, `src/assets`, `src/App.css`
8. Modify `src/App.jsx` and `src/main.jsx`
9. Run frontend server with: `npm run dev`
