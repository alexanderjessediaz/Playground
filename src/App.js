import React, {useState} from 'react';
// import { useForm } from './useForm';

const App = () => {
  const [count, setCount] = useState(10);

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <div>{count}</div>
    </div>
  );
};

export default App;

// import React from 'react';


// class App extends React.Component {
  
//   state = {
//     count:10
//   }
  
//   increment = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }

//   decrement = () => {
//     this.setState({
//       count: this.state.count - 1
//     })
//   }

//   render(){
    
//     return (
//       <div>
//       <button onClick={() => this.increment()}>+</button>
//       <button onClick={() => this.decrement()}>-</button>
//       <div >{this.state.count}</div>
//       </div>
//     )
//   };

// };
// export default App;


// function expensiveInitialState() {
//   // multiple for loops
//   return 10
// }

// usestate() is a replacement for state in class components  

// useState(() => expensiveInitialState()) is used when computation that is expensive. When this is used it will call it once vs noting being called every time when the component renders
// const App = () => {
  // const [count, setCount] = useState(() => expensiveInitialState());
  

  // old

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("")
  // <input 
  //  name="email"
  //  value="email"
  // onChange={e => setEmail(e.target.value)}
  // />


  
  // using hooks we can simplify and call it here
  // const [values, handleChange] = useForm({email:"", password: ""})
  // return <div>

  
    /* <button onClick={() => setCount(count + 1)}>+</button>
    <div>{count}</div>
    <input
      name="email"
      value={values.email}
      onChange={handleChange}
    />
    <input
      name="password"
      value={values.password}
      onChange={handleChange}
//     /> */
//   </div>;
// }

// export default App