import React from "react";
import '../css/new.css';
import pizzaImage from '../img/pizza.webp';
import cheesesticksImage from '../img/cheesesticks.webp';
import mozballsImage from '../img/mozballs.webp';
import macncheeseImage from '../img/macncheese.webp';

function Popular() {
    return (
        <div>
            <section className="popular section" id="popular">
                <span className="section__subtitle">The Best Food</span>
                <h2 className="section__title">Popular Dishes</h2>

                <div className="popular__container container grid" href="#recipe">
                    <article className="popular__card">
                        <img src={pizzaImage} alt="pizza" className="popular__img" />
                        <h3 className="popular__name">Pizza</h3>
                        <span className="popular__desc">Pizza</span>
                        <span className="popular__price">₱549.00</span>
                        <button className="popular__button">
                            <i className="ri-shopping-cart-2-line"></i>
                        </button>
                    </article>
                    <article className="popular__card">
                        <img src={cheesesticksImage} alt="Cheesesticks" className="popular__img" />
                        <h3 className="popular__name">Cheesesticks</h3>
                        <span className="popular__desc">cs</span>
                        <span className="popular__price">₱249.00</span>
                        <button className="popular__button">
                            <i className="ri-shopping-cart-2-line"></i>
                        </button>
                    </article>
                    <article className="popular__card">
                        <img src={mozballsImage} alt="Mozzarella balls" className="popular__img" />
                        <h3 className="popular__name">Mozzarella balls</h3>
                        <span className="popular__desc">mb</span>
                        <span className="popular__price">₱249.00</span>
                        <button className="popular__button">
                            <i className="ri-shopping-cart-2-line"></i>
                        </button>
                    </article>
                    <article className="popular__card">
                        <img src={macncheeseImage} alt="Mac 'N Cheese" className="popular__img" />
                        <h3 className="popular__name">Mac 'N Cheese</h3>
                        <span className="popular__desc">mnc</span>
                        <span className="popular__price">₱349.00</span>
                        <button className="popular__button">
                            <i className="ri-shopping-cart-2-line"></i>
                        </button>
                    </article>
                </div>
            </section>
        </div>
    );
}

export default Popular;
