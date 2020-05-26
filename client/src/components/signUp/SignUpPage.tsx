import React, { useState } from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import Axios from "axios";
import OfferInformation from "./OfferInformation";
import SplashPageForm from "./forms/SplashPageForm";
import VerificationForm from "./forms/VerificationForm";

import "../../css/SignUpPage.css";

interface Props extends RouteComponentProps {}

const SignUpPage: React.FC<Props> = (props: Props) => {
    const [hasSubmittedPhoneNumber, setHasSubmittedPhoneNumber] = useState<boolean>(false);

    // splash page form state variables
    const [consentCheckbox, setConsentCheckbox] = useState<boolean>(false);
    const [phoneNumberInput, setPhoneNumberInput] = useState<string>("");
    const [phoneNumberError, setPhoneNumberError] = useState<string>("");
    const [consentCheckboxError, setConsentCheckboxError] = useState<string>("");

    // verification form state variables
    const [randomNumber, setRandomNumber] = useState<number | null>(null);
    const [verificationNumberInput, setVerificationNumberInput] = useState<string>("");
    const [verificationAttemptCount, setVerificationAttemptCount] = useState<number>(0);
    const [verificationError, setVerificationError] = useState<string>("");

    const handleSplashPageFormSubmission = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // in case state returns to splash page,
        // verification error should only be seen once
        setVerificationError("");

        // better way to check validity of a phone number?
        if (consentCheckbox && phoneNumberInput.length === 10) {
            Axios.post("http://localhost:1337/sms", {
                phoneNumberInput,
            }).then((res) => {
                // splash page form state reset
                setConsentCheckbox(false);
                setPhoneNumberInput("");
                setConsentCheckboxError("");
                setPhoneNumberError("");

                setRandomNumber(res.data);
                // will now show a new page state
                setHasSubmittedPhoneNumber(true);
            });

            // errors to fire appropriate to which error occurs
        } else if (consentCheckbox && phoneNumberInput.length !== 10) {
            setConsentCheckboxError("");
            setPhoneNumberError("Please provide a valid phone number");
        } else if (!consentCheckbox && phoneNumberInput.length === 10) {
            setConsentCheckboxError("Please check 'yes' to continue");
            setPhoneNumberError("");
        } else {
            setPhoneNumberError("Please provide a valid phone number");
            setConsentCheckboxError("Please check the box to continue");
        }
    };

    const handleVerificationPageFormSubmission = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (randomNumber !== null) {
            if (randomNumber.toString() === verificationNumberInput) {
                navigate("/success");
            } else {
                if (verificationAttemptCount > 0) {
                    setVerificationError("Please enter a valid phone number and try again");
                    setHasSubmittedPhoneNumber(false);
                } else {
                    setVerificationError("Please try again");
                    setVerificationAttemptCount(verificationAttemptCount + 1);
                }
            }
        }
    };

    return (
        <div id="sign-up-landing" className="container flex-container">
            <section id="sign-up" className="flex-container">
                {hasSubmittedPhoneNumber ? (
                    ""
                ) : (
                    <OfferInformation verificationError={verificationError} />
                )}

                {hasSubmittedPhoneNumber ? (
                    <VerificationForm
                        verificationNumberInput={verificationNumberInput}
                        setVerificationNumberInput={setVerificationNumberInput}
                        verificationError={verificationError}
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
            </section>
        </div>
    );
};

export default SignUpPage;
