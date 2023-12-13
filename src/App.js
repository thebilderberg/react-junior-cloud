import { Component } from "react";
import style from './App.module.css';
import Header from "./contains/Header/Header";
import Lister from "./contains/Lister/Lister";
import Searcher from "./contains/Searcher/Searcher";
import Writer from "./contains/Writer/Writer";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, name: "Alexander", salary: 1000, status: false, star: false},
                {id: 2, name: "Solomon", salary: 1000, status: false, star: false},
                {id: 3, name: "Cesar", salary: 1000, status: false, star: false},
                {id: 4, name: "Evgeniy", salary: 1000, status: false, star: false},
            ]
        }
        this.maxId = 5;
    }

    onDelete = (id) => {
        this.setState(({data})=>{
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    onGiveParams = (newItem) => {
        this.setState(({ data }) => {
            return {
                data: [...data, { ...newItem, id: this.maxId++, status: false, star: false }]
            }
        })
    }

    onSalarySwitch = (id) => {
        this.setState(({data}) => ({
            data: data.map(item =>{
                if (item.id === id){
                    return {...item, status: !item.status}
                }
                return item;
            })
        }))
    }

    onStarSwitch = (id) => {
        this.setState(({data}) => ({
            data: data.map(item =>{
                if (item.id === id){
                    return {...item, star: !item.star}
                }
                return item;
            })
        }))
    }



    render() {
        const {data} = this.state

        const allList = this.state.data.length;                            // Счетчики для шапки
        const starUp = this.state.data.filter(item => item.star).length;   // Счетчики для шапки

        return (
            <div className={style.App}>
                <Header data={data}
                        allList={allList}
                        starUp={starUp} />
                <Searcher />
                <Lister data={data}
                        onDelete={this.onDelete}
                        onSalarySwitch={this.onSalarySwitch}
                        onStarSwitch={this.onStarSwitch} />
                <Writer data={data}
                        onGiveParams={this.onGiveParams} />
            </div>
        );
    }
}

export default App;
