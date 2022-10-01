import logo from './logo.svg';
import {Component} from "react";
import './App.css';

const Header = () => {
  return <h2>Hello Alex!!!</h2>
}

const Field = () => {
    const holder = 'Enter here';
        let styledField = {
            width: '200px',
            border: 'solid 2px red',
        }
    return <input placeholder={holder}
                  type={'text'}
                  style={styledField}/>
}

// class Field extends Component {
//     render() {
//         const holder = 'Enter here';
//         let styledField = {
//             width: '200px',
//             border: 'solid 2px red',
//         }
//         return <input
//                 placeholder={holder}
//                 type={'text'}
//                 style={styledField}/>
//     }
// }

function Btn() {
    const txt = 'log in';
    let logged = true;

    return <button>{logged ? 'Enter' : txt}</button>
}

function App() {
  return (
    <div className="App">
      <Header/>
        <Field/>
        <Btn/>
    </div>
  );
}

export {Header};
export default App;
