import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './index.css'

export default class Footer extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <footer className={'footer'}>
                <div className={`row`}>
                    <div className={`col`}>
                        <span>{this.props.col1Text}</span>
                    </div>
                    <div className={`col`}>
                        <span>{this.props.col2Text}</span>
                    </div>
                    <div className={`col`}>
                        <span>{this.props.col3Text}</span>
                    </div>
                </div>
            </footer>
        )

    }
}