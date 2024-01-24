`Revision of react 18`

- What makes react is the notion of reusability, speed, virtual DOM, components
- To use react we must also install nodejs
- Everything in a react applicatoin lives in the App.js file and the code is injected in the root division of the App.js file.
- package-lock.json is a snapshot of all the dependencies in a project
- When a react project is created the first task is to remove most of the boilerplate files
- In the index.js file we import the reactDOM and react module from react and 'react-dom/client' respectively
- In the index.js file after the function we create a root function and set it to

```
    const root ReactDOM.createRoot(document.getElementById('root'))
```

- main extensions for react-apps: auto rename tag; highlight matching tag; prettier; emmet
- As from react 17, we don't need to import react in our react components
- React has a new function that can create an element just with a js function. The name of the function is React.createElement(). This element takes 3 parameters, the first is the type of JSX we want to create, the props, and the initial text in the component
- React allows the usage of any html tags as jsx and nest them as you want. But in case you use the tags in an unorganise way, it will be difficult to maintain your code.
- React framework works fine with components are used considering their semantic ability
- Considering that we don't want to use semantic elements, we can use React Fragments. React Fragments allow us to group elements without adding the extra nodes
- we can do it with <React.Fragment></React.Fragment> or <></>. This prevents the usage of multiple unsemantic elements that makes it difficult for the code to be managed
- To add css files to react js files, we just have to add the import link to the file. e.g. adding the index.css to the main.js file.
  `import './index.css'`

- We can add styles to our jsx component as a style object. The css style properties are added this time as objects. This type of style is called inline style. For example

`<div style={{fontSize: '24px', }}>`

- We can create inline style objects for the components as variables
  `const style = {
height: '20px',
    }`

- The React children property is an incredible way to access everything we are rendering in a react application. This is very useful in the context API.
- Children provides an easy way to render elements that are in the components. We can also access react children in the props.
- In react we can't render a javascript object or array components directly. We need to pass the data in the array using tags
- In handling user action, we can use either the Vanilla JS DOM or we can use the onClick property for each component. We can use tag events like onClick; onSubmit; and onChange events
- In handling when form is submitted in react, we must add a function to the onSubmit property of the form components that controls the react form submission
  `function handleSubmit(e){
e.preventDefault()
}`
- For data flow in react, we can only pass props only from the parent to the children.
- With default exports, we can import the files with any name. With named exports, we must import the data with the same name.
- To work with local images we can import the images as default imports froma a file like the source file. This approach is good since it optimizes the react app.
- In the index.js file, the <React.StrictMode></React.StrictMode> is used to identify potential errors during the development of the code.
- When creating a react component in a create-react-app we can name it js or jsx, but in vite app, the react component must be jsx.
-
