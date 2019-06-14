import React from 'react'

import Featured from './featured';
import MatchesHome from './matches';


function Home() {
    return (
        <div className="bck_blue">
             <Featured/>
             <MatchesHome />
        </div>
    )
}

export default Home;