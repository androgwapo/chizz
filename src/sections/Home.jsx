import React from "react";
import '../css/new.css';
import firstImage from '../img/first.webp';
import secondImage from '../img/second.webp';

function Home() {
    return (
        <div>
            <section className="home section" id="home">
                <div className="home__container container grid">
                    <img src={firstImage} alt="" className="home__img" />
                    <div className="home__data">
                        <h1 className="home__title">
                            Your Cheesiest
                            <div>
                                <img src={secondImage} alt="" />
                                Fantasies!
                            </div>
                        </h1>
                        <p className="home__desc">Satisfy your cheesiest cravings, where dairy dreams come true!</p>
                        <a href="#" className="button">Order Now <i className="ri-arrow-right-line"></i></a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
