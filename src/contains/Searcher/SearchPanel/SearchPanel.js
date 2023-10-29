import "./SearchPanel.css";

import { Input } from 'antd';

function SearchPanel(){
    return(
        <div className="SearchPanel">
            <Input placeholder="Найти сотрудника" />
        </div>
    );
}

export default SearchPanel;