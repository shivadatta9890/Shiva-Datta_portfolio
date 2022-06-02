import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./NavSocial.module.css";

const NavSocial = ({ socialClass, socialIcons }) => {
    return (
        <>
            <li className={`${styles[socialClass]}`}>
                <a
                    href="https://github.com/shivadatta9890/"
                    className="socialIcons"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="My Github Portfolio."
                >
                    <FontAwesomeIcon
                        icon={["fab", "github"]}
                        className={`${styles[socialIcons]}`}
                    />
                </a>
            </li>
            <li className={`${styles[socialClass]}`}>
                <a
                    href="https://www.linkedin.com/in/shiva-datta/"
                    className="socialIcons"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="My Linkedin Profile."
                >
                    <FontAwesomeIcon
                        icon={["fab", "linkedin"]}
                       className={`${styles[socialIcons]}`}
                    />
                </a>
            </li>
            <li className={`${styles[socialClass]}`}>
                <a
                    href="mailto:shivaadatta9890@gmail.com"
                    className="socialIcons"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="My Linkedin email."
                >
                    <FontAwesomeIcon icon="envelope"  className={`${styles[socialIcons]}`} />
                </a>
            </li>
            <li className={`${styles[socialClass]}`}>
                <a
                    href="tel:+91 9133237160"
                    className="socialIcons"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="My Linkedin contact"
                >
                    <FontAwesomeIcon icon="phone"  className={`${styles[socialIcons]}`} />
                </a>
            </li>
            <li className={`${styles[socialClass]}`}>
                <a
                    href="https://docs.google.com/document/d/1jOZh3nxxxt5PcjxHEqVicWupVaDlQqml-gxP4k8uliQ/edit?usp=sharing"
                    className="socialIcons"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="My Linkedin resume"
                >
                    <FontAwesomeIcon icon="file"  className={`${styles[socialIcons]}`} />
                </a>
            </li>
        </>
    );
};

export default NavSocial;
