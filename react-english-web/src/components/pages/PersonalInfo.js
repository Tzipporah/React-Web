import ProgressBar from '../progress bar/ProgressBar'
import { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from '../Navbar'
import Footer from '../Footer'
import './personalInfo.css'


class PersonalInfo extends Component{
   

    // When the level is given, calculate all the atchivments of the user in the current level. 
    levelProgress = (level) => {
        
        let category, totalLevelProgress = 0
        for (category in this.props.profile[level]){
            totalLevelProgress += parseInt(this.props.profile[level][category])
        }
        return String(totalLevelProgress)
    }
    
    render() {
        
        const levels = ['beginners', 'students', 'advancers', 'business', 'spoken']
        const mapLeveltoHebrew = {
            'spoken': 'אנגלית מדוברת ',
            'business': ' אנגלית עיסקית',
            'advancers': 'מתקדמים',
            'students': 'תלמידים',
            'beginners': 'מתחילים'
        
        
          }
        
        return (
            <>
            <Navbar/>
            <div id='p-split-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <div className='p-title'>
            <h1>{this.props.user.displayName} שלום</h1>
            </div>
            <div className="p-split-item">
                
            <div id="progresses">
            {
                
                levels.map((level) => {
                    return (
                        <div key={level}>
                            <div id="level">{mapLeveltoHebrew[level]}</div>
                            <br/>
                            <ProgressBar done={this.levelProgress(level)}/> 
                        </div>
                    )
                })
                
            }
                    </div>
                </div>
            </div>
            <Footer/>
            </>
        )
    }
 
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        profile: state.firebase.profile,
        user: state.firebase.auth
    }
}
export default connect(mapStateToProps)(PersonalInfo)
