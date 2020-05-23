import React from "react";

import companyLogo from "../assets/flowerfix-logo.svg";
import { RouteComponentProps } from "@reach/router";

interface Props {}
const OfferInformation: React.FC<Props> = (props: Props) => {
    return (
        <div id="information" className="information">
            <img
                id="company-logo"
                src={companyLogo}
                alt="FlowerFix by FiftyFlowers"
                width="300"
                height="50"
            />
            <h1>Join the club!</h1>
            <h5>Get great deals and exclusive offers via text</h5>
            <ol id="information-list" className="information">
                <li className="information-li">Enter your cell phone</li>
                <li className="information-li">
                    Create your account (1 minute)
                </li>
                <li className="information-li">We text you exclusive offers</li>
                <li className="information-li">Reply "YES" to get the deal!</li>
            </ol>
        </div>
    );
};

export default OfferInformation;
