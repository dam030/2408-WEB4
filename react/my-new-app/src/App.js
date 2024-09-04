import logo from './logo.svg';
import './App.css';
import Post from './Post';
import { useRef, useState } from 'react';

function App() {
  const element = <h1 className='title'>안녕하세요 h1입니다</h1>
  const data = [{
      title : '첫 글은 내꺼야',
      text : '반갑습니다'
    },{
      title : '오늘 점심은',
      text : '뭐먹지'
    },{
      title : '추천',
      text : '부탁드립니다'
    }]

    const [ number , setNumber] = useState(0);
    const handleIncressNumber = ()=> {
      setNumber(number+1)
    }

    const [text, setText] = useState('');
    const handleChangeText = (e) => {
      setText(e.target.value)
    }

    const [imputText, setInputText] = useState('');
    const inputFocus = useRef()
    const handleChangeTextToButton = () => {
      setInputText(inputFocus.current.value)
    }

  return (
    <div className="App">
      {element}

      <span>{number}</span>
      <button onClick={handleIncressNumber}>딸깍</button>

      <input type="text" onChange={handleChangeText}/>
      <p>당신의 입력 : {text}</p>

      <input type='text' ref={inputFocus}/>
      <button onClick={handleChangeTextToButton}>인풋딸깍</button>
      <p>버튼 누르면 : {imputText}</p>

      {data.map((value,key)=>{
        return <p>{value.title}</p>
      })}
      {/* {data.map((value,key)=>
        <p>{value.title}</p>
      )} 
      위와 같은 서식 */}


      {data.map((value,key)=>
        <Post 제목={value.title} 내용={value.text}></Post>
      )}
    </div>
  );
}

export default App;
