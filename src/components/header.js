import React from "react";

const Header =(props) => {
    return (
        <header className="container-fluid">
            <div className = "row App-header">
                <div className = "col-md-4">
                    <p id="title">Famous People Clicky Game</p>
                </div>

                <div className = "col-md-4">
                    <p id="message">{props.message}</p>
                </div>

                <div className = "col-md-4">
                    <p id="scores">{`Score: ${props.score} Top Score: ${props.topScore}`}</p>
                </div>
            
            </div>
        </header>
    );
};  

export default Header;