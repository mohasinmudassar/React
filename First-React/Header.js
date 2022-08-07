

// Seperate Header component
// add export default to the component
export default function Header(){
    return(
            <header>
                <nav className= "container">
                    <img className= "item0" src="react1.png"></img>
                    {/*Styling Nav using "className = nav-items " */}
                    <ul className = "nav-items">
                        <li className= "space">Pricing</li>
                        <li className = "space">About</li>
                        <li className= "space">Contact</li>
                    </ul>
                </nav>
            </header>
    )
}