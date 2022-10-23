import {React} from "react";
import ItemPage from "./ItemPage";

const ProfessionPage = props => {
    const iconURL = 'https://wow.zamimg.com/images/wow/icons/large/'
    //inv_10_alchemy_bottle_shape1_violet.jpg

    return(
        <div>
            <ItemPage icon={`${iconURL}inv_10_alchemy_bottle_shape1_violet.jpg`} />
        </div>
    )
}

export default ProfessionPage;