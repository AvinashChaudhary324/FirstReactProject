
import './App.css';
import Add from "./components/Add";
import Sub from "./components/sub";
import Students from './components/Students';
import Sqr from './components/Sqr';
import Mul from './components/mul';
import Div from './components/div';
import UserListing from './components/UserListing'

function App() {
    var student1 = {
     name : "Anuj",
     age : 23,
     roll_no : 1234,
     city : "Mumbai"
    }

  return (
    <>
    <UserListing />
    <h1><Sqr /></h1>
    <h1><Mul /></h1>
    <h1><Div /></h1>
    <Students data={student1} />
    <Students data={{
     name : "Avinash",
     age : 20,
     roll_no : 123,
     city : "Mumbai"
    }} />
   <h1>Hello world </h1>
   <h1>Hello Avinash </h1>
   <h2>{9*10}</h2>
   <Add />
   <Sub x={6} y={3} />
   </>
  );
}

export default App;
