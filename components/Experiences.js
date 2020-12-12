import React from 'react'
import Title from './Title'
import Timeline from './ExperiencesTimelineItem'

export default class Experiences extends React.Component {
    render() {
        return (
            <section className="hero wrapper has-text-centered">
                <Title title="Experiences" color='#2c3e50'/>
                <div className="container">
                    <Timeline side="right" time="Nov 2020" color="#3498db">
                        <h4 style={{'color': '#3498db'}}>Vermeg</h4>
                        <p>
                            <i className="position">BA-QA Engineer</i>
                        </p>
                    </Timeline>
                    <Timeline side="left" time="Jun - Oct 2020" color="#e67e22">
                        <h4 style={{'color': '#e67e22'}}>Mobelite</h4>
                        <p>
                            <i className="position">QA Engineer</i>
                        </p>
                    </Timeline> 
                </div>
                
                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #bdc3c7;
                        color: #333333;
                        font-size: 1.3em;
                    }
                    h4 {
                        font-size: 1.2em;
                        font-weight: bold;
                    }
                    p {
                        font-size: 0.8em;
                    }
                    i.position {
                        color: #c0392b;
                    }
                `}</style>
            </section>
        )
    }
}