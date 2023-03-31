import React from 'react';
import Navigation from './Navbar'

function Index(){
    //Basic landing page, nothing special.
    return(
        <React.Fragment>
            <Navigation></Navigation>
            <h1>Welcome to student registry.</h1>
            <p>Select one of the above options</p>
        </React.Fragment>
    )
}

export default Index