import { React } from "react";
import './ItemPage.css';

/*
the info that items have in the DB:
id, name, icon, stacks_to, description, ilvl min, ilvl max, types (json),
(these things might get included into types): slot?, bind_on?, is_unique_equipped?
materials (has many) <-(this is a little annoying), recipe (has one or many), finishing reagents (has zero to many)
*/

const ItemPage = props => {
    
    //temp stuff for when we're not interacting with db
        const iconURL = 'https://wow.zamimg.com/images/wow/icons/large/'

        const makeIconURL = fileName => {
            //combining the icon url, ie wow.zaming etc
            //with the actual filename, ie inv_10_alchemy_bottle_shape1_violet.jpg
            return `${iconURL}${fileName}.jpg`
        }

    return(
        <div className="Item-Page">
            <img src={props.icon} alt="whatever"></img>
        </div>
    )
}

export default ItemPage;