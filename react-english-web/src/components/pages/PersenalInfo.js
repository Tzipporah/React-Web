import ProgressBar from '../progress bar/ProgressBar'
import { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from '../Navbar'
import Footer from '../Footer'

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
            <video src='/videos/Pexels Videos personalInfo.mp4' autoPlay loop muted />
            <h1>{this.props.user.displayName} שלום</h1>
            {
                levels.map((level) => {
                    return (
                        <>
                        {mapLeveltoHebrew[level]}
                        <ProgressBar done={this.levelProgress(level)}/> 
                        </>
                    )
                })
            }
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
