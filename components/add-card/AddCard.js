import {GrAdd} from "react-icons/gr";

import cardStyle from './index.module.css'

export default function AddCard(){
    return (
        <div className={cardStyle.card}>
            <GrAdd size="100" alignmentBaseline={"baseline"}/>
        </div>
    );
}