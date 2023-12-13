import style from "./Header.module.css";
import { Typography } from 'antd';

const { Title } = Typography;

function Header({allList, starUp}){

    return(
        <div className={style.Header}>
            <Title>Сотрудники</Title>
            <Title level={3}>Общее число трудящихся: {allList}</Title>
            <Title level={3}>На премию выходят: {starUp}</Title>
        </div>
    );
}

export default Header;