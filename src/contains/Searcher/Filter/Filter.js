import { Component } from 'react';
import style from "./Filter.module.css";
import { Radio } from 'antd';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'large',
        }
    }

    onValueSwitch = (e) => {
        const filterValue = e.currentTarget.getAttribute("switch-option");
        this.setState({ filter: filterValue });
        this.props.onSearchUpdate( "", filterValue );
    }

    render() {
        return (
            <div className={style.Filter}>
                <Radio.Group>
                    <Radio.Button onClick={this.onValueSwitch} switch-option="large" value="large">Все сотрудники</Radio.Button>
                    <Radio.Button onClick={this.onValueSwitch} switch-option="default" value="default">Выходят на премию</Radio.Button>
                    <Radio.Button onClick={this.onValueSwitch} switch-option="small" value="small">ЗП более $1000</Radio.Button>
                </Radio.Group>
            </div>
        );
    }
}

export default Filter;