import React from 'react'
import Title from './Title'
import Item from './EducationItem'

export default class Education extends React.Component {
    render() {
        return (
            <section className="hero wrapper has-text-centered">
                <Title title="Education" color='#ffffff'/>
                <div className="container">
                    <Item 
                        time="2020 - 2023 (Doctorate in TIC)"
                        name="SUP'COM"
                        major="5G Telecomunication"
                        color="#2ecc71"
                    />
                    <Item 
                        time="2019 - 2021 (Master)"
                        name="ISI Ariana"
                        major="Software Engineering"
                        color="#3498db"
                    />
                    <Item 
                        time="2014 - 2017 (Electrical Engineer)"
                        name="EPI Sousse"
                        major="Embedded Systems"
                        color="#2ecc71"
                    />
                    <Item 
                        time="2011 - 2014 (Bachelor)"
                        name="ISSAT Sousse"
                        major="Industrial Computing"
                        color="#3498db"
                    />
                </div>
                
                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #c0392b url('/static/images/bg-edu.jpg');
                        background-size: cover;
                        color: #333333;
                        font-size: 1.3em;
                    }
                `}</style>
            </section>
        )
    }
}