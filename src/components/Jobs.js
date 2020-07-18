import React from 'react'
import Typography from '@material-ui/core/Typography';

import Job from './Job';

export default function Jobs({jobs}){

    function scrollToTop () {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
          window.requestAnimationFrame(scrollToTop);
          window.scrollTo(0, c - c / 8);
        }
      };

    function handleNext() {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
        scrollToTop();
    }

    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
        scrollToTop();
    }    
    
    return(
        <div className="jobs">
            <Typography variant="h1">
                Entry Level Software Jobs
            </Typography>
            {
                jobs.map(
                    job => <Job job={job} />
                )
            }
        </div>
    )
}