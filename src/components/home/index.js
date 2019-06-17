import React from 'react'

import Featured from './featured';
import MatchesHome from './matches';
import MeetPlayers from './meet_players';
import Promotion from './Promotion';

function Home() {
    return (
        <div className="bck_blue">
             <Featured/>
             <MatchesHome />
             <MeetPlayers />
             <Promotion />
        </div>
    )
}

export default Home;