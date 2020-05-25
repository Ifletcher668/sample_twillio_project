import React, { Dispatch, SetStateAction } from "react";
import { RouteComponentProps } from "@reach/router";
import "../../../css/App.css";
import TextualLogo from "../../logos/TextualLogo";
import CompanyLogo from "../../logos/CompanyLogo";

interface Props extends RouteComponentProps {
    onSubmitAction: (event: React.FormEvent<HTMLFormElement>) => void;
    verificationNumberInput: string;
    setVerificationNumberInput: Dispatch<SetStateAction<string>>;
    verificationError: string;
}
const VerificationForm: React.FC<Props> = (props: Props) => {
    const {
        onSubmitAction,
        verificationNumberInput,
        setVerificationNumberInput,
        verificationError,
    } = props;
    return (
        <section id="verification-form-container" className="flex-container">
            <CompanyLogo />
            <div id="verification">
                <h4>Please enter the number sent to you</h4>
                <form id="verification-form" className="flex-container" onSubmit={onSubmitAction}>
                    <label>Number</label>
                    <input
                        type="text"
                        value={verificationNumberInput}
                        onChange={(event: any) => {
                            setVerificationNumberInput(event.target.value);
                        }}
                    />
                    <input className="submit-btn" type="submit" value="Enter Site" />
                    <span className="errors">{verificationError}</span>
                </form>
            </div>
            <TextualLogo />
        </section>
    );
};

export default VerificationForm;
