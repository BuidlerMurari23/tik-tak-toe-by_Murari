import Icon from "../Icon/Icon";
import "./Card.css"


function Card({player, index, onPlay, endGame}){
    let icon = <Icon />
    if (player == "O"){
        icon = <Icon name = "circle" />
    }else if ( player == "X"){
        icon = <Icon name = "cross" />
    }

    return(
       <div className="card" onClick={() =>!endGame && player=="" && onPlay(index)} >
        {icon}
       </div>
    )

}

export default Card;