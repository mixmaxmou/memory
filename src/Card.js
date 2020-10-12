import propTypes from 'prop-types'
import React from 'react'

import './Card.css'

const Card = ({card, feedback, onClick}) => (
    <div className={`card ${feedback}`} onClick={() => onClick(card)}>
    <span className="symbol">
      {feedback === 'hidden' ? card : card}
    </span>
    </div>
)

Card.propTypes = {
    card: propTypes.string.isRequired,
    feedback: propTypes.oneOf(
        [
            'visible',
            'hidden',
            'justMatched',
            'justMissmatched'
        ]
    ),
    onClick: propTypes.func.isRequired,
}
export default Card

