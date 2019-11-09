import React from 'react'
import PropTypes from 'prop-types'
import Styles from './skills.module.css'

const Skill = ({ name, description }) => {
	return (
		<li className={Styles.item}>
			<header>
				<h3 className={Styles.heading}>{name}</h3>
				<p>{description}</p>
			</header>
		</li>
	)
}

Skill.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
}

export default Skill
