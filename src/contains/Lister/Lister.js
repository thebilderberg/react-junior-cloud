import style from "./Lister.module.css";
import ListerComponent from "./ListerComponent/ListerComponent";
import { List, Typography } from 'antd';

function Lister({ data, onDelete, onSwitch }){

    let ListerComponentFinal = data.map((elem)=>{

        const {id, ...itemProps} = elem;

        return (
            <ListerComponent
                key={id}
                {...itemProps}
                onDelete={()=> onDelete(id)}
                onSwitch={(e)=> onSwitch(id, e.currentTarget.getAttribute("switch-option"))} />
        )
    });

    return(
        <div className={style.Lister}>

            <List
                bordered
                dataSource={ListerComponentFinal}
                renderItem={(item) => ( 
                    <List.Item>
                        <Typography.Text mark></Typography.Text> {item}
                    </List.Item>
                )}
            />
        </div>
    );
}

export default Lister;