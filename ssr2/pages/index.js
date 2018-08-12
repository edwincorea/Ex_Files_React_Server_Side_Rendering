import React from "react";

import "./index.css";
import Card from "./Card";

class Index extends React.Component {

    render() {
        return (
            <div className="App">    
                <header className="App-header">
                    <img src="/static/logo.png"
                        className="static-logo" alt="logo"
                    />
                </header>
                <div className="Grid">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>);
    }    
}

export default Index;