import React from 'react'
import { useSpring, animated } from 'react-spring'
import PropTypes from 'prop-types'
import { Waypoint } from 'react-waypoint'
import Styles from './experience.module.css'

const Experience = ({
	bottomOffset,
	company,
	title,
	years,
	contract,
	notes,
}) => {
	const [experienceOpacity, setOpacity] = useSpring(() => {
		return { opacity: 0, transform: 'translateY(25px)' }
	})

	return (
		<Waypoint
			onEnter={() => {
				setOpacity({ to: { opacity: 1, transform: 'translateY(0px)' } })
			}}
			bottomOffset={bottomOffset}
		>
			<animated.li
				className={Styles.experience}
				style={experienceOpacity}
			>
				<h3 className={`${Styles.title} heading-secondary`}>
					{company} - {title}
				</h3>
				<span>
					{years[0]}
					{years[1] ? ` - ${years[1]}` : null}
					{contract ? ' - (contract)' : null}
				</span>
				<ul className={Styles.listSquare}>
					{notes.map((note, i) => {
						// eslint-disable-next-line react/no-array-index-key
						return <li key={i}>{note}</li>
					})}
				</ul>
			</animated.li>
		</Waypoint>
	)
}

Experience.defaultProps = {
	bottomOffset: '125px',
	contract: false,
}

Experience.propTypes = {
	bottomOffset: PropTypes.string,
	contract: PropTypes.bool,
	company: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	years: PropTypes.arrayOf(PropTypes.number).isRequired,
	notes: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Experience
