import './App.css';
import  {useState,useRef} from'react';
import DicWrite from './components1/dic';
import DicList from './components1/diclist';
import Dicsearch from './components1/dicsearch';

function App() {
  const[data, setData] = useState([])
  const[result, setrResult] = useState([]);
  const dataId = useRef(0)  

  const createData = (word, explain, category)=>{
    const createDate = new Date().getTime();
    const newData={
      word, explain, category,createDate,
      id : dataId.current
    }
    dataId.current+=1
    setData([newData, ...data]);
  }
  const removeData = (targetId)=>{
    // })   id값이 같지 않은 객체를 찾자
   const resetData = data.filter((dataItem)=>dataItem.id !== targetId)
   setData(resetData);
  }
  const editData=(targetId,editExplain)=>{
  setData(  data.map((dataItem)=>dataItem.id === targetId  ? 
    {...dataItem,explain : editExplain} : dataItem ))

  }
  const searchData = (searchInput)=>{
    const newDic= data.filter((dataItem)=>{
      return(
      dataItem.word.toLowerCase().includes(searchInput.toLowerCase())||
      dataItem.explain.toLowerCase().includes(searchInput.toLowerCase())
      )}) 
    setrResult(newDic)
  }
  return (
    <div className="App">
     <DicWrite createData={createData} />
     <Dicsearch searchData={searchData}/>
     <DicList title='검색결과' data={result} 
     removeData={removeData}
      editData={editData}/>
     <DicList title='리스트' data={data} 
     removeData={removeData}
      editData={editData}/>
    </div>
  );
}


export default App;
