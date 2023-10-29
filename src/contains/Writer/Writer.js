import "./Writer.css";
import { Input } from 'antd';
import { Button } from 'antd';

function Writer(){
    return(
        <div className="Writer">
            <div><Input placeholder="Имя" /></div>
            <div><Input placeholder="Какая ЗП" /></div>
            <div><Button type="primary">Добавить</Button></div>
        </div>
    );
}

export default Writer;