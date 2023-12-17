import style from "./Searcher.module.css";
import SearchPanel from "./SearchPanel/SearchPanel";
import Filter from "./Filter/Filter";

function Seracher(props){
    return(
        <div className={style.Searcher}>
            <SearchPanel onSearchUpdate={props.onSearchUpdate} data={props.data} />
            <Filter onSearchUpdate={props.onSearchUpdate} data={props.data} />
        </div>
    );
}

export default Seracher;