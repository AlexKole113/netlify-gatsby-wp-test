import React from "react"
import './index.css'
import mystore from '../../redux';
import {connect} from "react-redux";




class ThemeToggler extends React.Component {

    constructor(props) {
        super(props);
        this.toggleTheme = this.toggleTheme.bind(this);
    }

    toggleTheme(){
        console.log(mystore.getState() )
        const theme = ( mystore.getState().theme === 'light' ) ? 'dark' : 'light';
        mystore.dispatch( { type: 'CHANGING_THEME' , theme } )
    };

    render(){
        const {theme} = this.props;

        return(
            <label className="theme-switcher">
                <input
                    className={`theme-switcher__input ${theme}`}
                    name="theme-switcher"
                    onChange={this.toggleTheme}
                    type="checkbox"
                />
                <span className="theme-switcher__bounce" />
            </label>
        )
    }
}


const mapStateToProps = (state) => ({
    theme: state.theme,
});


export default connect( mapStateToProps )( ThemeToggler );