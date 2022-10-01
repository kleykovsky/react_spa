import logo_apple from './logo_apple.png';
import './TestApp.css';

const txt = 'Hello Apple!'

function TestApp() {
    return (
        <div className={'title'}>
            <div className="title-display">
                <h1 className={'title-h1'}>{txt}</h1>
                <img src={logo_apple} className={'title-logo'} alt='logo'/>
                <p className={'title-text'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, voluptatem?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, voluptatem?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, voluptatem?
                </p>
            </div>
            <a className={'title-link'} href={'https://apple.com'}>
                ***Please click***
            </a>
        </div>
    );
}
export default TestApp;