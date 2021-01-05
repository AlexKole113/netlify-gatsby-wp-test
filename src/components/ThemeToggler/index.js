import React from "react"
import './index.css'
import store from '../../pages/reducers/main';




export default class ThemeToggler extends React.Component {

    constructor(props) {
        super(props);
        this.toggleTheme = this.toggleTheme.bind(this);
    }

    toggleTheme(){
        console.log(store.getState() )
        const theme = ( store.getState().theme === 'light' ) ? 'dark' : 'light';
        store.dispatch( { type: 'CHANGING_THEME' , theme } )
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