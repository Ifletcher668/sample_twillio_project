import React from "react";
import "./css/App.css";
import SignUpPage from "./components/signUp/SignUpPage";
import { Router } from "@reach/router";
import SuccessPage from "./components/success/SuccessPage";

function App() {
    return (
        <div className="site-container">
            <Router>
                <SignUpPage path="/" className="app-main" />
                <SuccessPage path="/success" />
            </Router>
        </div>
    );
}

export default App;
