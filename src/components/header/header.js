import React from 'react'
import { Link } from 'gatsby'
import Styles from './header.module.css'
import Title from './title'
import ThemeSwitch from '../themeswitch/themeswitch'

const Header = () => {
	return (
		<section className={Styles.section}>
			<div className={`container ${Styles.wrapper}`}>
				<Link to="/" className={Styles.link}>
					<div className={`${Styles.header}`}>
						<Title />
					</div>
				</Link>
				<ThemeSwitch />
			</div>
		</section>
	)
}

export default Header
