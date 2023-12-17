import { Component } from 'react';
import style from "./SearchPanel.module.css";
import { Input } from 'antd';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        }
    }

    onSearchUpdate = (e) => {
        const search = e.target.value;
        this.setState({search});
        this.props.onSearchUpdate(search);
    }

    render() {
        return(
            <div className={style.SearchPanel}>
                <Input placeholder="Найти сотрудника"
                       value={this.state.search}
                       onChange={this.onSearchUpdate} />
            </div>
        );
    }
}

export default SearchPanel;