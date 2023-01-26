import { faArrowUpFromBracket, faEllipsis, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Card.css";

function Card(props) {
    const cat = props.cat;

    return (
        <div className="Card_container">
            <img className="Card_img" src={cat?.url} alt="" />
            <div className="Card_overlay">
                <FontAwesomeIcon icon={faHeart} className="Card_favorite" />
                <div className="Card_overlay_buttons_container">
                    <div className="Card_overlay_buttons_background">
                        <FontAwesomeIcon icon={faArrowUpFromBracket} />
                    </div>
                    <div className="Card_overlay_buttons_background">
                        <FontAwesomeIcon icon={faEllipsis} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;