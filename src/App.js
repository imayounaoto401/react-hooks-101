import React,{useState} from 'react';


const App = () => {
  const [count, setCount] = useState(0)


  const increment = () => {
    setCount(count + 1);
  }

  const increment2 = () => {
    setCount(previousCount => previousCount + 1);
  }


  const decrement = () => {
    setCount(count - 1);
  }

  const divide3 = () => setCount(prevCount => prevCount % 3 === 0 ? prevCount / 3 : prevCount)





  return (
    <>
      <div>count : {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>


      <div>
        <button onClick={increment2}>+1</button>
      </div>

      <div onClick={()=>setCount(0)}>reset</div>
      <div onClick={()=>setCount(count*2)}>x2</div>

      <div onClick={divide3}>3の倍数のときだけ３で割る</div>
    </>
  );
}

export default App;
