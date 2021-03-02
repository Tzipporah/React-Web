import ProgressBar from '../progress bar/ProgressBar'
import { Component } from 'react'
import { connect } from 'react-redux'

class PersonalInfo extends Component{
    
    levelProgress = (level) => {
        
        let category, totalLevelProgress = 0
        for (category in this.props.profile[level]){
            totalLevelProgress += parseInt(this.props.profile[level][category])
            
        }
        return String(totalLevelProgress)
    }
    
    render() {
        
        const levels = ['beginners', 'students', 'advancers', 'business', 'spoken']
        return (
            <>
            {
                levels.map((level) => {
                    return (
                        <ProgressBar done={this.levelProgress(level)}/> 
                    )
                })
            }
            </>
        )
    }
 
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps)(PersonalInfo)
