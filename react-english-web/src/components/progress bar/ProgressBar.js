import React, { useEffect } from 'react'
import './ProgressBar.css'

const ProgressBar = ({done}) => {
	const [style, setStyle] = React.useState({});
	
	// Create a timeout so the progress bar makes an effect of filling up
	useEffect(() => {
		const timeOut = setTimeout(() => {
			const newStyle = {
				opacity: 1,
				width: `${done}%`
			}
			
			setStyle(newStyle);
		}, 200);
		return () => {
		}
	}, [])
	
	
	return (
		<>
		{done==0?<i className='fas fa-lock'/>:done==100?<i className='fas fa-check-circle'/>:<i className='fas fa-glasses'/>}
		<div className="progress">
			<div className="progress-done" style={style}>
				{done!=0?done:''}{done!=0?'%':''}

			</div>
			
		</div>
		</>
	)
}

export default ProgressBar