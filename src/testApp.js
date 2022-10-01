import logo_apple from './logo_apple.png';
import './testApp.css';

const txt = 'Hello Apple!'

function testApp() {
    return(
        <div className={'title'}>
            <div className="title-display">

                <h1 className={'title-h1'}>{txt}</h1>
                <img src={logo_apple} className={'title-logo'} alt='logo'/>
                <text className={'title-text'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, voluptatem?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, voluptatem?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, voluptatem?
                </text>
            </div>
            <a className={'title-link'} href={'https://apple.com'}>
                ***Please click***
            </a>

        </div>
    );
}
export default testApp;