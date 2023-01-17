import { useContext } from "react";
import { MyContext } from "../../contexts/myContext";
import "./Card.css";

function Card(props) {
    const cat = props.cat;

    const valueFromContext = useContext(MyContext);
    console.log('DIN CARD ', valueFromContext);

    return (
    <div className="Card_container">
        <img className="Card_img" src={cat?.url} alt="" />
        <p className="Card_title">{cat?.id}</p>
    </div>
    );
}

export default Card;