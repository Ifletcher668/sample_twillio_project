import React from "react";
import { RouteComponentProps, Link } from "@reach/router";
import CompanyLogo from "../logos/CompanyLogo";
import "../../css/SuccessPage.css";

interface Props extends RouteComponentProps {}
const SuccessPage: React.FC<Props> = (props: Props) => {
    return (
        <div id="success-landing" className="container flex-container">
            <section id="success-message">
                <div id="success-header">
                    <Link to="/">
                        <CompanyLogo />
                    </Link>
                </div>
                <h1>That's it!</h1>
                <p>
                    Sit back, relax, and wait <br /> for new amazing deals
                </p>
            </section>
        </div>
    );
};

export default SuccessPage;
