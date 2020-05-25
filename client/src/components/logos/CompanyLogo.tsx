import React from "react";
import companyLogo from "../../assets/flowerfix-logo.svg";

const CompanyLogo: React.FC = () => {
    return (
        <img
            id="company-logo"
            src={companyLogo}
            alt="FlowerFix by FiftyFlowers"
            width="300"
            height="60"
        />
    );
};

export default CompanyLogo;
