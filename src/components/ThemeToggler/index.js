import React from "react"
import './index.css'
import mystore from '../../pages/reducers/main';




export default class ThemeToggler extends React.Component {

    constructor(props) {
        super(props);
        this.toggleTheme = this.toggleTheme.bind(this);
    }

    toggleTheme(){
        console.log( mystore.getState() )
        const theme = ( mystore.getState().theme === 'light' ) ? 'dark' : 'light';
        mystore.dispatch( { type: 'CHANGING_THEME' , theme } )
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