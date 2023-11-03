import "./Lister.css";
import ListerComponent from "./ListerComponent/ListerComponent";
import { List, Typography } from 'antd';

function Lister({data}){

    let ListerComponentFinal = data.economic.listForLister.map((elem)=>
        <ListerComponent {...elem} />
    );

    return(
        <div className="Lister">

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