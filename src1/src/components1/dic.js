import { useRef, useState } from 'react';

const DicWrite = ({createData}) => {
    const wordRef = useRef();
    const explainRef = useRef();
    const [state, setState] = useState({
        word: '',
        explain: '',
        category: 'react'
    });
    const changeFunc = (e)=>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }
    const submitFunc = ()=>{
        if(state.word.length <2){
            alert('단어를 확인하세요')
            wordRef.current.focus()
            return
        }
        if(state.explain.length <10){
            alert('설명글을 확인하세요')
            explainRef.current.focus()
            return
        }
       createData(state.word, state.explain, state.category);
       alert('저장 성공');
       setState({
        word: '',
        explain: '',
        category: 'react'
       })
    }   
    return (
        <div className="dicWrite">
            <h1>프론트엔드 사전</h1>
            <div>
                <dl>
                    <dt>
                        <input 
                        ref={wordRef} 
                        type="text" 
                        placeholder="단어" 
                        name="word" 
                        value={state.word}
                        onChange={changeFunc}
                        />
                    </dt>
                    <dd>
                        <textarea 
                        ref={explainRef} 
                        placeholder="설명" 
                        name="explain" 
                        value={state.explain}
                        onChange={changeFunc}
                        />
                    </dd>
                </dl>
                <div className='dodo'>
                    <span>분류 : </span>
                    <select
                     name='category'
                      value={state.category}
                      onChange={changeFunc}
                      >
                        <option value={'react'}>react</option>
                        <option value={'node'}>node</option>
                        <option value={'js'}>js</option>
                        <option value={'css'}>css</option>
                        <option value={'html'}>html</option>
                    </select>
                    <button onClick={submitFunc}>저장</button>
                </div>
            </div>
        </div>
    )
}
export default DicWrite;