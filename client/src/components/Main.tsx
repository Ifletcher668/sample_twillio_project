import React from "react";
import { RouteComponentProps } from "@reach/router";
import textualLogo from "../assets/textualPoweredByLogo.svg";
import companyLogo from "../assets/flowerfix-logo.svg";
import { text } from "express";

interface Props {
    className: string;
}
const Main: React.FC<Props> = (props: Props) => {
    const { className } = props;
    return (
        <section className={className}>
            <div id="information" className="information">
                <img
                    id="company-logo"
                    src={companyLogo}
                    alt="FlowerFix by FiftyFlowers"
                />
                <h1>Join the club</h1>
                <h5>Get great deals and exclusive offers via text</h5>
                <ol id="information-list" className="information">
                    <li>Enter your cell phone</li>
                    <li>Create your account (1 minute)</li>
                    <li>We text you exclusive offers</li>
                    <li>Reply "YES" to get the deal!</li>
                </ol>
            </div>
            <form id="sign-up-form" className="sign-up-form">
                <label htmlFor="">Cell Phone</label>
                <input type="text" placeholder="(xxx)-xxx-xxxx" />
                <input type="submit" value="Send Me Details" />
                <h6>
                    <input type="checkbox" /> By providing your mobile number,
                    you consent to receive text message promotions and product
                    campaigns from FlowerFix (Powered By Textual), and you also
                    agree to our Privacy Policy and Terms. Standard messaging
                    rates may apply.
                </h6>
            </form>
            <img
                id="textual-logo"
                src={textualLogo}
                alt="App powered by Textual"
                width="300"
                height="50"
            />
        </section>
    );
};

export default Main;
