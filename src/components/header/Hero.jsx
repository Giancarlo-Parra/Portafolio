import React from 'react';
import '../../assets/styles/components/Hero.scss';


const Hero = () =>(
    <section className='Hero'>
        <div className='Hero_info-container'>
            <img  src="https://i.imgur.com/pVztkWU.png?1"
            alt="foto-mia"
            className='Hero_foto'/>
            <h1>Nombre</h1>
            <h2>Front-End Developer</h2>
            </div>
            <div className='Hero_info'>
                <div>
                    <a href="https://github.com/Giancarlo-Parra">
                        <figure className='Hero_contact'>
                            <i className="fab fa-github"></i>
                            
                        </figure>
                    </a>
                    <a href="https://www.linkedin.com/in/giancarlo-parra-arango-a5bb871b2/">
                        <figure className='Hero_contact' >
                            <i className="fab fa-linkedin"></i>
                            
                        </figure>
                    </a>
                    
                </div>
        </div>
    </section>
);

export default Hero;