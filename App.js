import logo from './logo.svg';
import './App.css';

function App() {
  return (
     <div className="App" style ={{ padding: "200px", marginTop: "-143PX"}}>
       <body>
     <h1 style={{textalign : 'center'}}></h1> 
     <h1>Login Form</h1>  
     <form action='./submit' method='post'> 
     User    Id   : <input type='text' id ='UserId' name='UserId' size='10'></input><br></br>
     User Name  :<input type='text' id ='userName' name ='userName' size='10'></input><br></br>
     <button type='submit' name ='submit'> submit</button>
     </form>
     </body>
    </div>
  );
}

export default App;
