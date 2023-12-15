import {useState} from "react";

const DicSearch = ({searchData}) => {
    const [searchInput,setsearchInput] = useState()
    const inputTxt = (e)=>{
        setsearchInput(e.target.value);
    }
    const searchFunc=()=>{
        searchData(searchInput);
    }
    return (
        <div className="dicSearch">
            <h2>검색창</h2>
            <div>
                <input type="text" value={searchInput} placeholder="search" onChange={inputTxt}></input>
                <button className="dododo" onClick={searchFunc}>검색</button>
            </div>
        </div>
    );
}
export default DicSearch