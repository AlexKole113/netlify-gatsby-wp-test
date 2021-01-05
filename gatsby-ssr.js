/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from 'react';
import { Provider } from 'react-redux';
import mystore from './src/redux';


export const wrapRootElement = ({ element }) => {
    return (
        <Provider store={mystore}>{element}</Provider>
    );
}