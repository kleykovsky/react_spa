import React, {Component} from "react";
import './App.css';
// import * as events from "events";
import styled, {keyframes} from "styled-components";
import BootstrapTest from "./BootstrapTest";
import Wrapper2 from "./Wrapper2";

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

const DynamicGreating = (props) => {
    return(
        <div className={'mb-3 p-3 border-' + props.color}>
            {
                React.Children.map(props.children, child => {
                    return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
                })
            }
        </div>
    )
}

const Form = (props) => {
    return(
        <div className={'mb-5 p-3 border-' + props.color} style={{color:'red'}}>
            {
                React.Children.map(props.children, child => {
                    return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'}, )
                })
            }
        </div>
    )
}

const HelloGreating = () => {
    return(
        <div style={{width: '600px', margin: '0 auto', textAlign: 'center'}}>
            <Form>
                <h2>Hello world!</h2>
            </Form>
        </div>
    )
}

const Message = (props) => {
    return(
        <h2> The counter is {props.counter}</h2>
    )
}

class Counter extends Component {
    state = {
        counter: 0
    }

    changeCounter = () => {
        this.setState(({counter}) => ({
            counter: ++counter
        }))
    }

    render() {
        return(
            <>
                <button
                    className={'btn btn-primary'}
                    onClick={this.changeCounter}>
                    Click me
                </button>
                {this.props.render(this.state.counter)}
                {this.props.render(this.state.counter)}

            </>
        )
    }
}


function App() {
    return (
        <Wrapper>
            <Counter render={counter => (
                <Message counter={counter}/>
            )}/>

            <HelloGreating/>
            <BootstrapTest left={
                <DynamicGreating color={'primary'}>
                    <h2>Hello</h2>
                </DynamicGreating>
            }
            right={
                <DynamicGreating>
                    <h2>World!</h2>
                </DynamicGreating>
            }
            />

            <Wrapper2 left={
                <Form color={'primary'}>
                    <h1>Text</h1>
                    <text>111</text>
                </Form>
            }
            right={
                <Form>
                    <h1>Text</h1>
                    <text>222</text>
                </Form>
            }
            />
            <WhoAmI name={'Alex'} surname={'Kle'} link={'https://google.ru'} />
            <WhoAmI name={'John'} surname={'Jet'} link={'https://google.ru'} />
        </Wrapper>
    );
}

export default App;
