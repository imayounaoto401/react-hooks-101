import React,{useState,useEffect} from 'react';


const App = (props) => {

  const [state , setState] = useState(props)
  const {name, price} = state;

  useEffect(()=>{
    console.log("name change")

  },[name])

  return (
    <>
      <p>現在の{state.name}は{price}円です。</p>
      <button onClick={()=>setState({...state, price:price + 1})}>+1</button>
      <button onClick={()=>setState({...state, price:price - 1})}>-1</button>
      <button onClick={()=>setState(props)}>リセット</button>
      <input value={name} onChange={e => setState({...state, name:e.target.value})}/>
    </>
  );
}

App.defaultProps = {
  name: 'サンプル',
  price : 1000
}

export default App;
