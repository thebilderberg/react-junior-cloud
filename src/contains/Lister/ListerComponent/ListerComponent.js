import styles from "./ListerComponent.module.css";
import { DeleteOutlined, DollarOutlined } from '@ant-design/icons';
import {useEffect, useState} from "react";
import classNames from "classnames";

function ListerComponent({ name, salary, status, id}){

    let [clicked, setClicked] = useState(false);
    useEffect(()=>{
        if (status) {setClicked(status)}
    });

    return(
        <div className={classNames(styles.ListerComponent, {
            [styles.NewListerComponent]: clicked === true
        })}>
            <div>{name}</div>
            <div>${salary}</div>
            <div><DollarOutlined onClick={
                ()=>{
                    setClicked(!clicked);
                }
            }/></div>
            <div><DeleteOutlined /></div>
        </div>
    );
}

export default ListerComponent;