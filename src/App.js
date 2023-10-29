import './App.css';
import Header from "./contains/Header/Header";
import Lister from "./contains/Lister/Lister";
import Searcher from "./contains/Searcher/Searcher";
import Writer from "./contains/Writer/Writer";


function App({data}) {
  return (
    <div className="App">
      <Header />
      <Searcher />
      <Lister data={data}/>
      <Writer />
    </div>
  );
}

export default App;
