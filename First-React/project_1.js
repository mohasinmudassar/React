// Using React JS to create a static page that prints some inform about react...
/*const page =(
    <div>
        <img src="react.png" alt="react" width="40" height="40"></img>
        <h1>Fun facts about React</h1>
        <ul>
            <li>React is a JavaScript library for building user interfaces...</li>
            <li>It was released in 2013...</li>
            <li>It has over 100K starts on Github...</li>
            <li>It is maintained by Facebook...</li>
        </ul>
    </div>
)*/

// Creating functions / Components
// Components are reusable pieces of code that we can use to build applications.
// Components Conventions:
//1. Components must start with a Capital letter
//2. Wrap it in Angular brackets < function /> when calling

/*
function Page(){
    return(
        <div>
        <img src="react.png" alt="react" width="40" height="40"></img>
        <h1>Fun facts about React</h1>
        <ul>
            <li>React is a JavaScript library for building user interfaces...</li>
            <li>It was released in 2013...</li>
            <li>It has over 100K starts on Github...</li>
            <li>It is maintained by Facebook!...</li>
        </ul>
    </div>
    )
}
ReactDOM.render(
    <Page/>,
    document.getElementById("root")
    )
*/

// Creating a component that prints why i want to learn react
function Me () {
    return(
        <div>
            <h1>Why I want to learn React?</h1>
            <ol>
                <li>It is fun</li>
                <li>It is easy</li>
                <li>It is fast</li>
                <li>It is free</li>
            </ol>
        </div>
    )
}

ReactDOM.render(
    <Me/>,
    document.getElementById("root")
)