import * as React from "react";
import "./Footer.scss";

export class Footer extends React.Component
{
    public render(): JSX.Element
    {
        return (
            <footer className="footer-container">
                <div className="footer-top">
                    <h3>CONTACT</h3>
                    <p>감사합니다 :)</p>
                    <address>
                        <ul>
                            <li>
                                <a href="mailto:leeduyoung2002@gmail.com">
                                    <img src="/assets/img/ico_mail.svg" alt="ico_mail"/>
                                    <span>leeduyoung2002@gmail.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:010-9100-1476">
                                    <img src="/assets/img/ico_phone.svg" alt="ico_phone"/>
                                    <span>010-9100-1476</span>
                                </a>
                            </li>
                        </ul>
                    </address>
                </div>
                <div className="footer-bottom">
                    <ul>
                        <li>
                            <a href="https://ithub.tistory.com/" target="_blank">
                                <img src="/assets/img/tistory-logo-fill.svg" alt="tistory-logo-fill"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/leeduyoung" target="_blank">
                                <img src="/assets/img/github-logo.svg" alt="github-logo"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        )
    }
}