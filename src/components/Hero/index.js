import { Link } from "gatsby"
import React from "react"
import './index.css'

export default class Hero extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        const banner        = this.props.banner || 'https://demiart.ru/forum/uploads12/post-2517027-1367609190.jpg'
        const bannerText    = this.props.bannerText || 'SomeText'

        console.log(banner)

        const bannerStyles = {
            backgroundImage: `url(${banner})`
        }

        return (
            <section style={bannerStyles} className={'hero'}>
                <div className={`container`}>
                    <div className={`banner-text-group`}>
                        <h2 className={`banner-text-group__title`}>{bannerText}</h2>
                    </div>
                </div>
            </section>
        )

    }
}