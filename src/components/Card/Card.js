

import "./Card.css";

function Card(props) {
    const cat = props.cat;
   

    return (
        <div className="Card_container">
            <img className="Card_img" src={cat?.url} alt="" />
        </div>
    );
}

export default Card;