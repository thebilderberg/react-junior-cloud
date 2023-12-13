import style from "./Searcher.module.css";
import SearchPanel from "./SearchPanel/SearchPanel";
import Filter from "./Filter/Filter";

function Seracher(){
    return(
        <div className={style.Searcher}>
            <SearchPanel />
            <Filter />
        </div>
    );
}

export default Seracher;