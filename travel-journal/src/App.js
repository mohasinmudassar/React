import Navbar from "./Navbar";
import Card from "./Card";
import "./index.css";
import data from "./Data";

export default function App() {
  
    const cards = data.map(item => {
      return(
        <Card
          key={item.id}
          {...item}

        />
      )
    })
    return(
    <div>
      <header>
        <Navbar/>
        {cards}
      </header>
    </div>
  );
}

