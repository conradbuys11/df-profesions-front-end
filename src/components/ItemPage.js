import { React } from "react";

const ItemPage = props => {
    //props: name, icon (url), description?, profession belonged to, 

    return(
        <div>
            <img src={props.icon} alt="whatever"></img>
        </div>
    )
}

export default ItemPage;