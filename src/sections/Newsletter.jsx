import React from "react";
import '../css/new.css';
import nlImage from '../img/nl.webp';  // Correctly import the image

function Newsletter() {
    return (
        <div>
            <section className="newsletter section">
                <div className="nl__container container grid">
                    <div className="nl__content grid">
                        <img src={nlImage} alt="nl" className="nl__img" />
                        <div className="nl__data">
                            <span className="section__subtitle">Newsletter</span>
                            <h2 className="section__title">
                                Lorem Ipsum <br />
                                dolor
                            </h2>
                            <form action="" className="nl__form">
                                <input type="email" placeholder="Enter Email" className="nl__input" />
                                <button className="button nl__button">
                                    Send<i className="ri-send-plane-2-line"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Newsletter;
