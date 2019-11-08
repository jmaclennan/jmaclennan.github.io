import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ProjectPreview from './projectPreview'
import Styles from './project-preview.module.css'

const Projects = () => {
	const {
		allProjectsJson: { nodes: projects },
	} = useStaticQuery(
		graphql`
			query {
				allProjectsJson {
					nodes {
						id
						name
						description
						year
						thumbnail {
							src {
								childImageSharp {
									fluid(maxWidth: 600, maxHeight: 352) {
										...GatsbyImageSharpFluid_withWebp
									}
								}
							}
						}
					}
				}
			}
		`
	)
	return (
		<section className={`home-section ${Styles.section}`}>
			<div className="container container--wide home__flexwrap">
				<header className={`home__header ${Styles.body}`}>
					<h2>Recent Projects</h2>
				</header>

				<div className="home__body">
					<ul
						className={`list-unstyled ${Styles.list} ${Styles.noGutter}`}
					>
						{projects.map(project => {
							return (
								<ProjectPreview
									key={project.id}
									id={project.id}
									name={project.name}
									thumbnail={project.thumbnail}
								/>
							)
						})}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Projects
