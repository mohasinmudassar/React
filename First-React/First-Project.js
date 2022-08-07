
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";


// Parent/ Child components
// Composing Components Together
/*
// Seperate Header component
function Header(){
    return(
            <header>
                <nav className= "container">
                    <img className= "item0" src="react1.png"></img>
                    <ul className = "nav-items">
                        <li className= "space">Pricing</li>
                        <li className= "space">About</li>
                        <li className= "space">Contact</li>
                    </ul>
                </nav>
            </header>
    )
}
*/
// Seperate Footer Component
/*function Footer(){
    return(
        <footer className="footer">
                <small>"© 2022 Mohasin Mudassar development. All rights reserved."</small>
        </footer>
    )
}*/
// Seperate MainContent component
/*function MainContent(){
    return(
        <div>
            <h1>Why I want to learn React?</h1>
            <h2>Reasons</h2>
            <ol>
                <li>It is fun .</li>
                <li>It is easy.</li>
                <li>It is fast.</li>
                <li>It is free.</li>
            </ol>
        </div>
    )
}*/
function App () {
    return(
        <div>
            {/*Calling Header, Main Content & Footer component in main Page*/}
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    )
}
ReactDOM.render(
    <App/>,
    document.getElementById("root")
)