import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hi I Am </span>
                    <span>Harsh Gupta </span>
                    <span>Fullstack Developer with
                        high level of experience fullstack
                        <br /> 
                      development, producing
                        quality work
                    </span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <img src={Github} alt="" />
                    <img src={LinkedIn} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
            <div className="i-right">
            <img src={vector1} alt="" />
            <img src={vector2} alt="" />
            <img src={boy} alt="" />
            <img src={glassesimoji} alt="" />
            <div style={{top:'-4%', left:'55%'}}>
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </div>
            <div style={{top:'22.8rem', left:'1rem'}}>
                <FloatingDiv image={thumbup} txt1='Best Designs' txt='Awards'/>
            </div>
            <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
            <div className="blur" style={{
                background:'#C1F5FF',
                top: '17rem',
                width: '21rem',
                height: '11rem',
                left: '-9rem'
            }}></div>
            </div>
        </div>
    )
}

export default Intro