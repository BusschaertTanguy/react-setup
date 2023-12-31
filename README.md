# Creating react project

The best way to create a clean react project for now is to use Vite instead of Webpack.

More on Vite [here](https://vitejs.dev/guide/).

The command to create a React app with TS is

`npm create vite@latest my-vue-app -- --template react-ts`

One thing to change to remove the ESLint errors on the vite.config.ts is changing the `project` under `parserOptions` of the `.eslintrc.cjs` file to `['./tsconfig.json', './tsconfig.node.json']`.

```js
module.exports = {
  // ...
    
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.node.json'],
  }, 
    
  // ...  
}

```

Then u can clean up the remaining files under src to only have this left:
- App.tsx - Root component
- index.css (Which can be empty) - Global CSS
- main.tsx - Entry file
- vite-env.d.ts - Environment files

Now u have a clean slate to start.