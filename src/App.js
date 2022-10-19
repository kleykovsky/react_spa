import {Component} from "react";
import './App.css';
// import * as events from "events";
import styled, {keyframes} from "styled-components";

const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px  rgba(0, 0, 0, .2);
    a {
      display: block;
      margin: 10px 0 10px 0;
      color: ${props => props.active ? 'orange' : 'red'};
    }
    input {
      display: block;
      margin-top: 10px;
    }
    span {
      color: darkgreen;
    } 
`;

const rotate = keyframes`
    from {
     
      transform: scale(1.2);
    }
  to {
   
    transform: scale(0.9);
  }
`;

const Header = styled.div`
  font-family: -apple-system;
  font-size: 30px;
`;

export const Button = styled.button`
  display: block;
  padding: 5px 15px;
  background-color: #13be78;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 3px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .3);
    //animation: ${rotate} 3s linear infinite;
`;

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
            <EmpItem>
                <Button onClick={this.nextYear}>{this.state.txtBtn}</Button>
                <Header>My name is {name} surname {surname}, age {years}, sex - {this.state.sex}, position - {position}</Header>
                <a href={link}>My profile</a>
                <form>
                    <span>Введите должность</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e, 'color')}/>
                </form>
            </EmpItem>
        );
    }
}


const Wrapper = styled.div`
  max-width: 600px;
  margin: 80px auto 0 auto;
`;

function App() {
    return (
        <Wrapper>
            <WhoAmI name={'Alex'} surname={'Kle'} link={'https://google.ru'} />
            <WhoAmI name={'John'} surname={'Jet'} link={'https://google.ru'} />
        </Wrapper>
    );
}

export default App;
