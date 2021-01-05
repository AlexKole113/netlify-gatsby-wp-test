import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './index.css'
import ThemeToggler from "../ThemeToggler";

export default class Footer extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <footer className={'footer'}>
                <div className={`row footerInner`}>
                        <div className={`col d-flex align-items-center justify-content-center`}>
                            <span>{this.props.col1Text}</span>
                        </div>
                        <div className={`col d-flex align-items-center justify-content-center`}>
                            <span>{this.props.col2Text}</span>
                        </div>
                        <div className={`col d-flex align-items-center justify-content-center`}>
                            <ThemeToggler />
                        </div>
                    </div>
            </footer>
        )

    }
}