import logo from './logo.svg';
import './App.css';
import Post from './Post';

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

  return (
    <div className="App">
      {element}
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
