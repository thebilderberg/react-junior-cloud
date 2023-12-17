import { Component } from "react";
import style from './App.module.css';
import Header from "./contains/Header/Header";
import Lister from "./contains/Lister/Lister";
import Searcher from "./contains/Searcher/Searcher";
import Writer from "./contains/Writer/Writer";
// import Market from "./contains/Market/Market";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, name: "Alexander", salary: 900, status: false, star: false},
                {id: 2, name: "Solomon", salary: 1050, status: false, star: false},
                {id: 3, name: "Cesar", salary: 2000, status: false, star: false},
                {id: 4, name: "Evgeniy", salary: 7000, status: false, star: false},
            ],
            search: '',
            filter: 'large',
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

    onSwitch = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item =>{
                if (item.id === id){
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    onSearch = (items, search, filter) => {
        if (!search) {
            if (!filter) {
                return items;
            }
            if (filter === "large"){
                return items;
            }
            if (filter === "default"){
                return items.filter( item => { return item.status });
            }
            if (filter === "small"){
                return items.filter( item => { return item.salary > 1000});
            }
            return items;
        }
        return items.filter( item => { return item.name.indexOf(search) > -1; })
    }

    onSearchUpdate = (search, filter) => {
        this.setState({ search, filter });
    }

    //====================================================================================================

    render() {
        const {data, search, filter} = this.state

        const allList = this.state.data.length;                            // Счетчики для шапки
        const starUp = this.state.data.filter(item => item.star).length;   // Счетчики для шапки
        const  filteredSearchData = this.onSearch(data, search, filter)    //   Отфильтрованный список(data)
                                                                           //   с помощью аргументов Searher
        return (
            <div className={style.App}>
                {/*<Market />*/}
                <Header data={data}
                        allList={allList}
                        starUp={starUp} />
                <Searcher onSearchUpdate={this.onSearchUpdate}
                          data={data} />
                <Lister data={filteredSearchData}
                        onDelete={this.onDelete}
                        onSwitch={this.onSwitch} />
                <Writer data={data}
                        onGiveParams={this.onGiveParams} />
            </div>
        );
    }
}

export default App;
