import {Provider} from "react-redux";

import App, {Container} from "next/app";
import React from "react";

import { withRouter } from "next/router";
import withRedux from "next-redux-wrapper";

import { initStore } from "../store";

// https://github.com/zeit/next.js/#custom-app
class MyApp extends App {

    static async getInitialProps({Component, router, ctx}) {
        let pageProps = {};
        
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        
        return { pageProps };
    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
}

export default withRouter(withRedux(initStore)(MyApp));