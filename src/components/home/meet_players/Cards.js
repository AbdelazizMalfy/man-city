import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import {Animate} from 'react-move';
import Raheem from '../../../Resources/images/players/Raheem.png';
import PlayerCard from '../../ui/PlayerCard';

class HomeCards extends Component {

    state = {
        show: this.props.show,
        cards: [ 
            {
                bottom:90,
                left:300
            },
            {
                bottom:60,
                left:200
            },
            {
                bottom:30,
                left:100
            },
            {
                bottom:0,
                left:0
            }
        ]
    }

    showAnimatedCard = () => (
        this.state.cards.map((card,i) => (
            <Animate

                key={i}
                show={this.props.show}


                starts = {{
                    left:0,
                    bottom:0
                }}
                

                enter={{
                    left:  card.left ,
                    bottom:  card.bottom ,
                    timing: { duration: 500, ease:easePolyOut}
                }}
            >
                {({left,bottom}) => {
                    return (
                        <div style={{
                            position:'absolute',
                            left,
                            bottom
                        }}>
                            <PlayerCard number='7' name='Raheem' lastname='Sterling' bck={ Raheem } />
                        </div>
                    )
                }}
            </Animate>
        ))
    )

    render() {
        return (
            <div>
                {this.showAnimatedCard()}
            </div>
        )
    }
}


export default HomeCards