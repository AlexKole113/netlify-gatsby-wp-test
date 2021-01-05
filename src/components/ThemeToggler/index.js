import React from "react"
import './index.css'





export default class ThemeToggler extends React.Component {

    constructor(props) {
        super(props);
        this.toggleTheme = this.toggleTheme.bind(this);
    }

    toggleTheme(){
       
    };

    render(){

        return(
            <label className="theme-switcher">
                <input
                    className="theme-switcher__input"
                    name="theme-switcher"
                    onChange={this.toggleTheme}
                    type="checkbox"
                />
                <span className="theme-switcher__bounce" />
            </label>
        )
    }
}