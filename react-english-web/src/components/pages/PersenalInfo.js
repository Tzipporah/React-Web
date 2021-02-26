import ProgressBar from '../progress bar/ProgressBar'
import { Component } from 'react'
import { connect } from 'react-redux'

class PersonalInfo extends Component{
    
    render(){
        const { profile } = this.props
        // console.log(profile)
        return (
            <>
               <h1>hi</h1>
               <ProgressBar done={profile.beginners}/>
               <ProgressBar done={profile.students}/>
               <ProgressBar done={profile.advancers}/>
               <ProgressBar done={profile.business}/>
               <ProgressBar done={profile.spoken}/>
               
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
