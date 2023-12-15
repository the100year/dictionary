import { useState, useRef } from "react"
const DicItem = ({ word, explain, category, createDate, id, removeData, editData }) => {
    const [editExplain, setEditExplain] = useState(explain)
    const [isEdit, setIsEdit] = useState(false);
    const textEdit = useRef();
    const changeFunc =(e)=>{
        setEditExplain(e.target.value)
    }
    const editFunc = () => {
        setIsEdit(!isEdit);
    }
    const removeFunc = () => {
        if(window.confirm(`${word}삭제하시겠습니까?`)){
            removeData(id)
        }
       
    }
    const cancelFunc = () => {
if(window.confirm('취소하시겠습니까?')){
    setIsEdit(!isEdit);
    setEditExplain(explain);
}

   
    }
    const saveFunc = () => {
        if(editExplain.length < 10){
            alert('설명글을 자세히 작성하세요')
            textEdit.current.focus();
        }
        editData(id, editExplain)
        editFunc();
    }
    return (
        <div className="dicitem">
            <div>
                <dl>
                    <dt>
                        <span>{word}</span> ({category})
                    </dt>
                    <dd>
                        {isEdit ?    
                        <textarea value={editExplain} onChange={changeFunc} ref={textEdit}/>
                           :  explain }
                       
                    </dd>
                </dl>
                <div>
                    {isEdit ?
                        (<div>
                            <button onClick={cancelFunc}>취소</button>
                            <button onClick={saveFunc}>저장</button>
                        </div>) : (<div>
                            <button onClick={editFunc}>수정</button>
                            <button onClick={removeFunc}>삭제</button>
                        </div>)}
                </div>
            </div>
        </div>
    );
}

export default DicItem