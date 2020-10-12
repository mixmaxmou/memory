import PropsType from 'prop-types'
import React from 'react'

import './GuessCount.css'

const GuessCount = ({ guesses }) => <div className="guesses">{guesses}</div>

GuessCount.propTypes = {
    guesses: PropsType.number.isRequired,
}
export default GuessCount
