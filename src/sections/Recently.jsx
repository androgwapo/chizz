import React from "react";
import '../css/new.css';
import mozzPillowsImage from '../img/mozzpillows.webp';

function Recently() {
    return (
        <div>
            <section className="recently section" id="recently">
                <div className="recently__container container grid">
                    <div className="recently__data">
                        <span className="recently__subtitle">Recently Added</span>
                        <h2 className="section__title">
                            Mozz <br />
                            Pillows
                        </h2>
                        <p className="recently__desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <a href="#" className="button">Order Now
                            <i className="ri-arrow-right-line"></i>
                        </a>
                    </div>
                    <img src={mozzPillowsImage} alt="Mozz Pillows" className="recently__img" />
                </div>
            </section>
        </div>
    );
}

export default Recently;
