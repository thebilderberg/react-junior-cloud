import "./Header.css";
import { Typography } from 'antd';


const { Title } = Typography;

function Header(){
    return(
        <div className="Header">
            <Title>Сотрудники</Title>
            <Title level={3}>Общее число трудящихся: x</Title>
            <Title level={3}>На премию выходят: y</Title>
        </div>
    );
}

export default Header;