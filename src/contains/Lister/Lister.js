import "./Lister.css";
import ListerLomponent from "./ListerComponent/ListerLomponent";
import { List, Typography } from 'antd';

function Lister({data}){

    let ListerComponentFinal = data.economic.listForLister.map((elem)=>
        <ListerLomponent {...elem} />
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