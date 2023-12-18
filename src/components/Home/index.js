import CardComponent from "../CardComponent"
import CounterComponent from "../CounterComponent"
import Counter from "../Counter"
import Footer from "../Footer"
import "./index.css"

const groceries = [
    { id: 1, Name: "Bananas", Price: "50/Dozen", ImageUrl: "https://m.media-amazon.com/images/I/81lIJ1udLXL.jpg" },
    { id: 2, Name: "Capsicum", Price: "400/Kg", ImageUrl: "https://i.ndtvimg.com/mt/cooks/2014-11/capsicum.jpg" },
    { id: 3, Name: "Cauliflower", Price: "45/Piece", ImageUrl: "https://www.datocms-assets.com/61613/1643557993-fc0b72b1-0552-497b-b654-5e59621f74ce.jpg" },
    { id: 4, Name: "Ginger(Loose)", Price: "240/Kg", ImageUrl: "https://m.media-amazon.com/images/I/61hsje-+PYL._AC_UF1000,1000_QL80_.jpg" }
]

const Home = () => {
    return (
        <>
            <div className="react-task-home">
                <ul className="items-container">
                    {groceries.map((each) => (
                        <CardComponent key={each.id} card={each} />
                    ))}
                </ul>
                <CounterComponent />
                <Counter />
            </div>
            <Footer />
        </>
    )
}

export default Home;