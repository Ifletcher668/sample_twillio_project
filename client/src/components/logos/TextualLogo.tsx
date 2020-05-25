import React from "react";
import textualLogo from "../../assets/textualPoweredByLogo.svg";

const TextualLogo: React.FC = () => {
    return (
        <img
            id="textual-logo"
            src={textualLogo}
            alt="App powered by Textual"
            width="250"
            height="40"
        />
    );
};

export default TextualLogo;
