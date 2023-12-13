import style from "./Writer.module.css";
import { Component } from "react";
import { Input } from 'antd';
import { Button } from 'antd';

class Writer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            salary: "",
            status: false,
        }
    }

    onTextForWriter = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }


    addItem = () => {
        const { name, salary } = this.state;
        if (name && salary) {
            this.props.onGiveParams({ name, salary });
            this.setState({
                name: "",
                salary: "",
                status: false,
            });
        } else {
            // Обработка случая, если поля не заполнены
            console.log("Введите имя и зарплату");
        }
    }




    render(){
        const {name, salary} = this.state
        return(
            <div className={style.Writer}>
                <div><Input placeholder="Имя"
                            onChange={this.onTextForWriter}
                            name="name" value={name}/></div>
                <div><Input placeholder="Какая ЗП"
                            onChange={this.onTextForWriter}
                            name="salary" value={salary}/></div>
                <div><Button type="primary" onClick={this.addItem}>Добавить</Button></div>
            </div>
        );
    }
}

export default Writer;