import React from "react";
import CompanyLogo from "../logos/CompanyLogo";

interface Props {
    verificationError: string;
}
const OfferInformation: React.FC<Props> = (props: Props) => {
    const { verificationError } = props;
    return (
        <section id="information" className="information flex-container">
            <CompanyLogo />
            <h1 id="offer-title">Join the club!</h1>
            <h5>Get great deals and exclusive offers via text</h5>
            <ol id="information-list" className="information">
                <li className="information-li">Enter your cell phone</li>
                <li className="information-li">Create your account (1 minute)</li>
                <li className="information-li">We text you exclusive offers</li>
                <li className="information-li">Reply "YES" to get the deal!</li>
            </ol>
            <span className="errors">{verificationError}</span>
        </section>
    );
};

export default OfferInformation;
