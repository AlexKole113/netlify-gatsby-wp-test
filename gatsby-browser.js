/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
// gatsby-browser.js
import React from 'react';
import { Provider } from 'react-redux';
import mystore from './src/pages/reducers/main';


export const wrapRootElement = ({ element }) => {
    return (
        <Provider store={mystore}>{element}</Provider>
    );
}
