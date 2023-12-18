import "./index.css"

const CardComponent = (props) => {
    const { card } = props
    const { ImageUrl, Name, Price } = card

    return(
        <li className="item-container">
            <img src={ImageUrl} alt="cricketer-imge" className="react-task-image"/>
            <div className="item-description">
                <p><span className="card-desc">Name : </span>{Name}</p>
                <p><span className="card-desc">Price : </span>{Price}</p>
                <button onClick={() => {alert(Name)}}>Buy Now</button>
            </div>
        </li>
    )
}

export default CardComponent;