import React from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'

import './reset.css'
import Header from './header/header'
import Footer from './footer/footer'

const Layout = ({ home, visibility, children }) => {
	return (
		<div style={{ opacity: home && !visibility ? 0 : 1 }}>
			<Helmet>
				<title>James Maclennan - Front End Web Developer</title>
				<link
					href="https://fonts.googleapis.com/css?family=Roboto|Lato"
					rel="stylesheet"
				/>
			</Helmet>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	)
}

Layout.defaultProps = {
	home: false,
	visibility: true,
}

Layout.propTypes = {
	home: PropTypes.bool,
	visibility: PropTypes.bool,
	children: PropTypes.node.isRequired,
}

export default Layout
