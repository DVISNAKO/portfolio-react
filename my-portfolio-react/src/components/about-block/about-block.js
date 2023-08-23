import './about-block.css';
import 'boxicons'

function AboutBlock() {
    return (
        <div className='aboutBlock'>
            <section class="home" id="home">
                <div class="home-img">
                    <img src={require("./dim.jpg")} alt="myPhoto"/>
                </div>
                <div class="home-content">
                    <h3>Hello, It's Me</h3>
                    <h1>Dmitry Vishnyakov</h1>
                    <h3>And I'm a <span class="multiple-text">Frontend Developer</span></h3>
                    <p>Welcome to my portfolio project where I use #HTML #CSS #JavaScript technologies.
                        In my social pages you can see more photo about my private life.
                    </p>
                    <div class="social-media">
                        <a href="https://www.facebook.com/vi6vi6" target="_blank"><box-icon type='logo' name='facebook-circle'></box-icon></a>
                        <a href="https://www.instagram.com/dmitrijs.visnakovs/"><box-icon type='logo' name='instagram'></box-icon></a>
                        <a href="https://github.com/DVISNAKO" target="_blank"><box-icon type='logo' name='github'></box-icon></a>
                    </div>
                    <a href="#" class="btn">Download CV</a>
                </div>
               </section> 
        </div>
    );
}

export default AboutBlock;