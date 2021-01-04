import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {Component} from "react"
import ThemeToggler from "../ThemeToggler";
import Menu from "../Menu/index.js";
import './index.css'
import Logo from "../Logo/index.js";


export default class Header extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { siteTitle } = this.props;
        return (<header className={`header`} >
            <div className={`headerInner row`} >
                <div className={`col`}>
                    <Logo />
                </div>
                <div className={`col-2 menu-section`}>
                    <Menu />
                </div>
                <div className={`col`}>
                    <ThemeToggler />
                </div>

            </div>
        </header>)

    }


}

