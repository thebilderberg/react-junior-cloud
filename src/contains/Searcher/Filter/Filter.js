import "./Filter.css";
import { Radio } from 'antd';

function Filter(){
    return(
        <div className="Filter">
            <Radio.Group>
                <Radio.Button value="large">Все сотрудники</Radio.Button>
                <Radio.Button value="default">Выходят на премию</Radio.Button>
                <Radio.Button value="small">ЗП более $1000</Radio.Button>
            </Radio.Group>
        </div>
    );
}

export default Filter;