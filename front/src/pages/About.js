import React from 'react';
import Header from "../components/Header";
import css from "./css/About.module.css"
import Footer from "../components/Footer";

const About = () => {
    return (
        <div>
            <Header/>
            <section className={css.section}>
                <h2>О нас</h2>
                <p>Мы являемся ведущим онлайн магазином, предлагающим широкий ассортимент товаров высокого качества. Наша цель - предоставить нашим клиентам удобную и надежную платформу для покупок.</p>
                <p>Наша команда состоит из опытных профессионалов, которые следят за последними тенденциями и стараются предложить самые актуальные товары на рынке. Мы гордимся тем, что предлагаем только товары от проверенных производителей, чтобы обеспечить высокое качество каждого продукта, который мы продаем.</p>
                <p>Мы постоянно стремимся улучшить наш сервис и сделать покупки для наших клиентов максимально удобными. Если у вас есть какие-либо вопросы или предложения, не стесняйтесь обращаться к нам через страницу контактов.</p>
            </section>
            <Footer/>
        </div>

    );
};

export default About;