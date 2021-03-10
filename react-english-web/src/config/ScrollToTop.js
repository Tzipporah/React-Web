import React, { useEffect, Fragment } from 'react'; 
import { withRouter } from 'react-router-dom'; 

function ScrollToTop({ history, children }) 
{ 
    // Function makes sure that in every new enter of a page the user will be scrolled back to the top of the page.
    useEffect(() => { 
        const unlisten = history.listen(() => { 
            window.scrollTo(0, 0); 
        });
        return () => { 
            unlisten(); 
        } 
    }, []);

    return <Fragment>{children}</Fragment>; 
}

export default withRouter(ScrollToTop)