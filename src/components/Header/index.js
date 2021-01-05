import React, {Component} from "react"
import ThemeToggler from "../ThemeToggler";
import Menu from "../Menu";
import './index.css'
import Logo from "../Logo";


export default class Header extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (<header className={`header`} >
            <div className={`headerInner row`} >
                <div className={`col`}>
                    <Logo />
                </div>
                <div className={`col-2 d-flex align-items-center justify-content-center`}>
                    <Menu />
                </div>
                <div className={`col d-flex align-items-center justify-content-center`}>
                    <ThemeToggler />
                </div>


            </div>
        </header>)

    }


}

