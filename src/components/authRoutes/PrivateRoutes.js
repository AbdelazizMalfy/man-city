import React from 'react'
import {Route,Redirect  } from "react-router-dom";


function PrivateRoutes({
    user,
    component: Comp,
    ...rest
}) {
    return <Route {...rest} component={(props)=>(
        user ?  <Comp/>  : <Redirect to='sign_in'/>
    )} />
}

export default  PrivateRoutes;