import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// React.createElement => ReactElement-JS Object => HTMLElement(render)

// const heading = React.createElement("h1",{id:"heading"}, "Sheharoz"); // not the optimal way to create this element
// root.render(heading);
// console.log(root);

// to avoid the above clumpsy code JSX was developed. 
// we can write React without JSX also 

//jsx - is not HTML in js its XML like syntax  (transpiled before it reaches the JS) - Parcel - Babel (transpile)
// jsx => babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)
const jsxHeading  = (<h1 id="heading">Sheharoz React Using JSX</h1>); // optimal way to create the element 
// heading constant and jsxHeading both serve the same purpose
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);

// React Component
// class Based Component - OLD
// Function Based Component - NEW

// What is a React Functional Component ? : Its a usual function any function which returns a piece of JSX is a functional component.
const Title = ()=> (<h1 id="titleCom" className="titleClass">Title Component</h1>);
const val  = 100;
// component Composition
const HeadingComponent = ()=>(<div>
    <Title/>
    <h2>{val}</h2>
    <h1 id="headingComp" className="headingCompClass">Heading Component</h1>
    </div>);

root.render(<HeadingComponent/>);

