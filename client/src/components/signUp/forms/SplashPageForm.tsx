import React, { SetStateAction, Dispatch } from "react";
import { RouteComponentProps } from "@reach/router";
import "../../../css/App.css";
import TextualLogo from "../../logos/TextualLogo";

interface Props extends RouteComponentProps {
    onSubmitAction: (event: React.FormEvent<HTMLFormElement>) => void;
    consentCheckbox: any;
    setConsentCheckbox: Dispatch<SetStateAction<any>>;
    phoneNumberInput: string;
    setPhoneNumberInput: Dispatch<SetStateAction<string>>;
    consentCheckboxError: string;
    phoneNumberError: string;
}

const SplashPageForm: React.FC<Props> = (props: Props) => {
    const {
        onSubmitAction,
        consentCheckbox,
        setConsentCheckbox,
        phoneNumberInput,
        setPhoneNumberInput,
        phoneNumberError,
        consentCheckboxError,
    } = props;

    return (
        <section id="sign-up-form-container" className="sign-up-form flex-container">
            <form
                id="sign-up-form"
                className="sign-up-form flex-container"
                onSubmit={onSubmitAction}>
                <div id="form-body" className="flex-container">
                    <label>Cell Phone</label>
                    <input
                        id="phone-number-input"
                        type="text"
                        placeholder="(xxx)-xxx-xxxx"
                        value={phoneNumberInput}
                        onChange={(event: any) => {
                            setPhoneNumberInput(event.target.value);
                        }}
                    />
                    <span className="errors">{phoneNumberError}</span>

                    <h6>
                        <input
                            type="checkbox"
                            value={consentCheckbox}
                            onChange={() => {
                                setConsentCheckbox(!consentCheckbox);
                            }}
                        />{" "}
                        By providing your mobile number, you consent to receive text message
                        promotions and product campaigns from FlowerFix (Powered By Textual), and
                        you also agree to our Privacy Policy and Terms. Standard messaging rates may
                        apply.
                    </h6>
                    <input
                        id="sign-up-submit-btn"
                        className="submit-btn"
                        type="submit"
                        value="Send Me Details"
                    />
                </div>
                <span className="errors">{consentCheckboxError}</span>
            </form>
            <TextualLogo />
        </section>
    );
};

export default SplashPageForm;
