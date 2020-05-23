import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import textualLogo from "../assets/textualPoweredByLogo.svg";
import Axios from "axios";

import OfferInformation from "./OfferInformation";
import SplashPageForm from "./forms/SplashPageForm";
import VerificationForm from "./forms/VerificationForm";
interface Props {
    className: string;
}

const transitionEffects: object = {};

const Main: React.FC<Props> = (props: Props) => {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    // splash page form state variables
    const [consentCheckbox, setConsentCheckbox] = useState<boolean>(false);
    const [phoneNumberInput, setPhoneNumberInput] = useState<string>("");
    const [phoneNumberError, setPhoneNumberError] = useState<string>("");
    const [consentCheckboxError, setConsentCheckboxError] = useState<string>(
        ""
    );

    const [randomStringNumber, setRandomStringNumber] = useState<string>("");

    const [verificationNumberInput, setVerificationNumberInput] = useState<
        string
    >("");

    const handleSplashPageFormSubmission = (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        console.log(`checkbox value: ${consentCheckbox}`);
        if (consentCheckbox && phoneNumberInput.length === 10) {
            Axios.post("http://localhost:1337/sms", {
                phoneNumberInput,
            }).then((res) => {
                setRandomStringNumber(res.data);
                setIsSubmitted(true);
                setConsentCheckbox(false);
                setPhoneNumberInput("");
            });
        } else if (consentCheckbox && phoneNumberInput.length !== 10) {
            setConsentCheckboxError("");
            setPhoneNumberError("Please provide a valid phone number");
        } else if (!consentCheckbox && phoneNumberInput.length === 10) {
            setConsentCheckboxError("Please check 'yes' to continue");
            setPhoneNumberError("");
        } else {
            setPhoneNumberError("Please provide a valid phone number");
            setConsentCheckboxError("Please check 'yes' to continue");
        }
    };

    const handleVerificationPageFormSubmission = (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        console.log(randomStringNumber);
        console.log(verificationNumberInput);
        if (randomStringNumber.toString() === verificationNumberInput) {
            // figure out why it isn't a string and why that's ok
        } else setIsSubmitted(false);
        // if random string matches, send to success page
        // else return back to original state
    };

    const { className } = props;
    return (
        <section className={className}>
            {isSubmitted ? "" : <OfferInformation />}
            {isSubmitted ? (
                <VerificationForm
                    verificationNumberInput={verificationNumberInput}
                    setVerificationNumberInput={setVerificationNumberInput}
                    onSubmitAction={handleVerificationPageFormSubmission}
                />
            ) : (
                <SplashPageForm
                    onSubmitAction={handleSplashPageFormSubmission}
                    consentCheckbox={consentCheckbox}
                    setConsentCheckbox={setConsentCheckbox}
                    phoneNumberInput={phoneNumberInput}
                    setPhoneNumberInput={setPhoneNumberInput}
                    phoneNumberError={phoneNumberError}
                    consentCheckboxError={consentCheckboxError}
                />
            )}
            <img
                id="textual-logo"
                src={textualLogo}
                alt="App powered by Textual"
                width="250"
                height="40"
            />
        </section>
    );
};

export default Main;
