import React from 'react'
import Styles from './footer.module.css'

const Footer = () => (
	<footer className={Styles.footer}>
		<div className="container">
			<div className={Styles.wrapper}>
				<div className={Styles.contact}>
					James Maclennan
					<br />
					Vancouver, BC
					<br />
					<a href="tel:7789281262">(604) 763-7648</a>
					<br />
				</div>
				<div className={Styles.copyright}>
					<span>
						© {new Date().getFullYear()}, Built with
						<a href="https://www.gatsbyjs.org">GatsbyJS</a>
					</span>
				</div>
			</div>
		</div>
	</footer>
)

export default Footer
