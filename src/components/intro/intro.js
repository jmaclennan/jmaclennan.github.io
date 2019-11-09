import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import PropTypes from 'prop-types'
import BodyClassName from 'react-body-classname'
import Styles from './intro.module.css'
import Title from '../header/title'

const Intro = ({ unmountIntro }) => {
	const unmountDelay = 800
	const titleAnimationOffset = -50
	const [containerVisibility, setContainerVisibility] = useState(true)
	const [readyForUnmount, setReadyForUnmount] = useState(false)

	const containerAnimation = useSpring({
		from: {
			opacity: 1,
		},
		to: {
			opacity: containerVisibility ? 1 : 0,
		},
		delay: unmountDelay,
		onRest: () => {
			if (readyForUnmount) {
				unmountIntro()
			} else {
				setContainerVisibility(false)
				setReadyForUnmount(true)
			}
		},
	})

	const titleAnimation = useSpring({
		from: {
			transform: `translateY(0px)`,
			opacity: 0,
		},
		to: {
			transform: `translateY(${titleAnimationOffset}px)`,
			opacity: 1,
		},
		config: { mass: 1, tension: 100, friction: 20 },
	})

	return (
		<BodyClassName className={Styles.isLocked}>
			<animated.div
				className={Styles.container}
				style={containerAnimation}
			>
				<animated.div style={titleAnimation}>
					<Title />
				</animated.div>
			</animated.div>
		</BodyClassName>
	)
}

Intro.propTypes = {
	unmountIntro: PropTypes.func.isRequired,
}

export default Intro
