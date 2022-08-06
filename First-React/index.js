// Rendering page using DOM API
//ReactDOM.render(<ul><li>Coffee</li><li>Milk</li><li>Tea</li></ul>, document.getElementById("root"));

// Imperative approach using Vanilla JS
/*const h1 = document.createElement("h1");
h1.textContent = "Hello World";
h1.className ="header";
document.get    ElementById("root").append(h1);*/

//Using React Js creating Nav Bar
const page = (
    <nav>
        <h1>My Page</h1>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>

    )
  
ReactDOM.render(
    page,
    document.getElementById("root")
    )


