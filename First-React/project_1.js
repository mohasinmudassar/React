// Using React JS to create a static page that prints some inform about react...
const page =(
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
)
console.log(page);
ReactDOM.render(
    page,
    document.getElementById("root")
    )