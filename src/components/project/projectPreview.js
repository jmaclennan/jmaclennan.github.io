/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import Link from 'gatsby-link'
import Styles from './project-preview.module.css'

const ProjectPreview = ({ id, name, thumbnail }) => {
	return (
		<li className={Styles.project}>
			<Link to={`/projects/${id}`} state={{ id }} className={Styles.link}>
				<header className={Styles.header}>
					<Image
						className={Styles.thumbnail}
						fluid={thumbnail.src.childImageSharp.fluid}
						style={{
							borderRadius: '2px',
							overflow: 'hidden',
						}}
					/>
					<span className={Styles.cta}>View project</span>
				</header>
				<footer className={Styles.footer}>
					<h3 className={`heading-secondary ${Styles.heading}`}>
						{name}
					</h3>
				</footer>
			</Link>
		</li>
	)
}

ProjectPreview.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	thumbnail: PropTypes.shape({
		src: PropTypes.shape({
			childImageSharp: PropTypes.shape({
				fluid: PropTypes.object,
			}),
		}),
	}).isRequired,
}

export default ProjectPreview
