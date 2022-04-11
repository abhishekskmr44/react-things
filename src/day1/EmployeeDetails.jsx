import React from 'react';

const data = {
    img:"https://ca.slack-edge.com/T02QFJUB5DF-U03523YM1LK-6a7dac294273-512",
    name:"ronak",
    qualification: "masai graduated",
    package:"21LPA",
}

function EmployeeDetails(){
    
    return(
        <>
        <card {...data}/>
        </>
    )

}

export default EmployeeDetails;