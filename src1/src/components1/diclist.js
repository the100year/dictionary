import DicItem from "./dicItem";
const DicList=({title,data,removeData,editData})=>{
    return(
        <div className="diclist">
            <h2>{title}</h2>
            <h4>{data.length}개의 리스트가 있습니다.</h4>
            <div>
                {data.map((dataItem)=>(
                    // console.log(dataItem)
                    <DicItem key={dataItem.id} {...dataItem} removeData={removeData} editData={editData}/>
                ))}
            </div>
            </div>
    );
}

export default DicList