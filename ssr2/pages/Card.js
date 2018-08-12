import React from "react";
import { withRouter } from "next/router";

import "./Card.css";

class Card extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <div className="front">
                    <img src="/static/juice.jpg" alt="Avatar" className="card-image" />
                    <div className="container">
                        <h3>Vitamin Juice <span className="price">$24.99</span></h3> 
                        <p>
                    Need a jump on your vitamins while drinking? Tired of popping the pills?
                    Drink our vitamin enhanced juice, available in several flavours.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Card);
