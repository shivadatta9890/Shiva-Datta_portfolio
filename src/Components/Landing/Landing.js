import React from "react";
import Fade from "react-reveal/Fade";
import smoothscroll from "smoothscroll-polyfill";
import Button from "../Utilities/Button";
import avatar from "../../Assets/img/Myimg.png";
import { HashLink as Link } from "react-router-hash-link";
import styles from "./Landing.module.css";

const Landing = () => {
    smoothscroll.polyfill();
    return (
        <header id="landing" className={`${styles.landing} ${"container"}`}>
            <Fade>
                <section className={styles.welcome}>
                    <h1>
                        <span>Hello!</span>
                        <br />
                        <span>I'm Shiva Datta</span>
                    </h1>
                    <h2>I'm an aspiring Full Stack Developer based in India.</h2>
                    <Link smooth to="/#projects">
                        <Button input={"See my work"} />
                    </Link>
                </section>
                <section className={styles.avatar}>
                    <img src={avatar} alt="My Avatar" />
                    
                </section>
            </Fade>
        </header>
    );
};

export default Landing;
