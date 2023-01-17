import { useContext } from "react";
import { MyContext } from "../../contexts/myContext";
import "./Card.css";

function Card(props) {
    const cat = props.cat;

    const [contextState, setContextState] = useContext(MyContext);


    function clickOnTitle() {
        setContextState('William doarme');
    }

    return (
        <div className="Card_container">
            <img className="Card_img" src={cat?.url} alt="" />
            <p className="Card_title" onClick={clickOnTitle}>{cat?.id}</p>
        </div>
    );
}

export default Card;