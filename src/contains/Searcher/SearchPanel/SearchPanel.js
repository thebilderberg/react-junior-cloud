import style from "./SearchPanel.module.css";

import { Input } from 'antd';

function SearchPanel(){
    return(
        <div className={style.SearchPanel}>
            <Input placeholder="Найти сотрудника" />
        </div>
    );
}

export default SearchPanel;