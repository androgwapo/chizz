import React from "react";
import '../css/new.css';
import thirdImage from '../img/third.webp';
import aboutImage from '../img/about.webp';

function About() {
    return (
        <div>
           <section className="about section" id="about">
               <div className="about__container container grid">
                    <div className="about__data">
                        <span className="section__subtitle">
                            About Us
                        </span>
                        <h2 className="section__title about__title">
                            <div>
                                We provide
                                <img src={thirdImage} alt="about img" />
                            </div>
                                Cheezy Food
                        </h2>
                        <p className="about__desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <img src={aboutImage} alt="img" className="aimg"/>
               </div> 
           </section>
        </div>
    );
}

export default About;
