import './app.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import AboutBlock from '../about-block/about-block';
import MySkill from '../my-skills/MySkill';

function App () {
    return (
        <div>
        <div className='app'>
            <Header/>
        </div>

        <div className='block'>
            <AboutBlock/>
            <MySkill/>
        </div>

        <div className='foot'>
            <Footer/>
        </div>
        </div>
    ); 
}

export default App;