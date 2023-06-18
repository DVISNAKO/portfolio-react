import Header from '../header/header';
import Footer from '../footer/footer';
import AboutBlock from '../about-block/about-block';
import MySkill from '../my-skills/MySkill';
import LatesProjects from '../lates-projects/LatesProjects';


import './app.css';
import ContactForm from '../contact-form/ContactForm';


function App () {
    return (
        <div>
        <div className='app'>
            <Header/>
        </div>

        <div className='block'>
            <AboutBlock/>
            <MySkill/>
            <LatesProjects/>
           <ContactForm/>
           
        </div>

        <div className='foot'>
            <Footer/>
        </div>
        </div>
    ); 
}

export default App;