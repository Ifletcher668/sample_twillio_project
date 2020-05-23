import React, { SetStateAction, Dispatch, CSSProperties } from "react";
import { RouteComponentProps } from "@reach/router";

interface Props {
    onSubmitAction: (event: React.FormEvent<HTMLFormElement>) => void;
    consentCheckbox: any;
    setConsentCheckbox: Dispatch<SetStateAction<any>>;
    phoneNumberInput: string;
    setPhoneNumberInput: Dispatch<SetStateAction<string>>;
    consentCheckboxError: string;
    phoneNumberError: string;
}

const errorStyles: CSSProperties = {
    color: "red",
    fontSize: ".7em",
    fontWeight: "bold",
};

const inputStyle: CSSProperties = {
    color: "green",
};

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
        <div id="sign-up-form-container" className="sign-up-form">
            <form
                id="sign-up-form"
                className="sign-up-form"
                onSubmit={onSubmitAction}>
                <div id="form-body">
                    <label htmlFor="phoneNumber">Cell Phone</label>
                    <input
                        type="text"
                        placeholder="xxx-xxx-xxxx"
                        value={phoneNumberInput}
                        onChange={(event: any) => {
                            setPhoneNumberInput(event.target.value);
                        }}
                    />
                    <span style={errorStyles}>{phoneNumberError}</span>
                </div>
                <input type="submit" value="Send Me Details" />

                <h6>
                    <input
                        type="checkbox"
                        value={consentCheckbox}
                        onChange={() => {
                            setConsentCheckbox(!consentCheckbox);
                        }}
                    />{" "}
                    By providing your mobile number, you consent to receive text
                    message promotions and product campaigns from FlowerFix
                    (Powered By Textual), and you also agree to our Privacy
                    Policy and Terms. Standard messaging rates may apply.
                </h6>
                <span style={errorStyles}>{consentCheckboxError}</span>
            </form>
        </div>
    );
};

export default SplashPageForm;
