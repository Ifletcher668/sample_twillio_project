import React, { Dispatch, SetStateAction } from "react";
import { RouteComponentProps } from "@reach/router";

interface Props {
    onSubmitAction: (event: React.FormEvent<HTMLFormElement>) => void;
    verificationNumberInput: string;
    setVerificationNumberInput: Dispatch<SetStateAction<string>>;
}
const VerificationForm: React.FC<Props> = (props: Props) => {
    const {
        onSubmitAction,
        verificationNumberInput,
        setVerificationNumberInput,
    } = props;
    return (
        <div>
            <h4>Please enter the number sent to you</h4>
            <form onSubmit={onSubmitAction}>
                <label htmlFor="">Number</label>
                <input
                    type="text"
                    value={verificationNumberInput}
                    onChange={(event: any) => {
                        setVerificationNumberInput(event.target.value);
                    }}
                />
                <input type="submit" value="Enter Site" />
            </form>
        </div>
    );
};

export default VerificationForm;
