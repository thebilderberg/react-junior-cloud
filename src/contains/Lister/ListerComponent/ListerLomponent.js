import "./ListerLomponent.css";
import { DeleteOutlined, DollarOutlined } from '@ant-design/icons';
import {FuncNewStatusListerCompFromData} from "../../../Data/Data";

function ListerLomponent({ name, solary, status, id}){

    let compClassName = "ListerLomponent";

    if (status) {
        compClassName = "NewListerLomponent";
    }

    return(
        <div className={compClassName}>
            <div>{name}</div>
            <div>${solary}</div>
            <div><DollarOutlined onClick={
                ()=>{
                    FuncNewStatusListerCompFromData();
                }
            }/></div>
            <div><DeleteOutlined /></div>
        </div>
    );
}

export default ListerLomponent;