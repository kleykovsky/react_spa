import {Component} from "react";
import './App.css';
import * as events from "events";


// func build
// function WhoAmI ({name, surname, link}) {
//
//     return(
//         <div>
//             <h1>My name is - {name()} surname - {surname.sur} </h1>
//             <a href={link}>My profile</a>
//         </div>
//     )
// }


// class build
class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state =  {
             txtBtn: 'Click me',
             years: 10,
             sex: '',
            position: '',
        }
        // this.nextYear = this.nextYear.bind(this)
    }

    nextYear = () => {
        // console.log('Good!')
        // console.log(this)
        this.setState(state => ({
            years: state.years + 1,
            sex: state.sex = 'Male',
        }))
    }

    commitInputChanges = (e, color) => {
        console.log(color)
        this.setState({
            position: e.target.value,
        })
    }


    render() {
        const {name, surname, link} = this.props
        const {position, years} = this.state
        console.log(this)
        return (
            <div>
                <button onClick={this.nextYear}>{this.state.txtBtn}</button>
                <h1>My name is {name} surname {surname}, age {years}, sex - {this.state.sex}, position - {position}</h1>
                <a href={link}>My profile</a>
                <form>
                    <span>Введите должность</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e, 'color')}/>
                </form>
            </div>
        );
    }
}

function App() {
    return (
        <div className="App">
            <WhoAmI name={'Alex'} surname={'Kle'} link={'https://google.ru'} />
            <WhoAmI name={'John'} surname={'Jet'} link={'https://google.ru'} />
        </div>
    );
}



export default App;
