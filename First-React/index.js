 // Rendering page using DOM API
//ReactDOM.render(<ul><li>Coffee</li><li>Milk</li><li>Tea</li></ul>, document.getElementById("root"));

// Imperative approach using Vanilla JS
/*const h1 = document.createElement("h1");
h1.textContent = "Hello World";
h1.className ="header";
document.get    ElementById("root").append(h1);*/

//Using React Js creating Nav Bar
/*
const page = (
    <div>
        <h1>My Page</h1>
        <ol>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ol>
    </div>

     )
 */

// Using React JS to create a static page that prints some inform about react...
const page =(
    <div>
        <img src="react.png" alt="react" width="40" height="40"></img>
        <h1>Fun facts about React</h1>
        <ul>
            <li>React is a JavaScript library for building user interfaces.</li>
            <li>It was released in 2013</li>
            <li>It has over 100K starts on Github</li>
            <li>It is maintained by Facebook</li>
        </ul>
    </div>
)
ReactDOM.render(
    page,
    document.getElementById("root")
    )