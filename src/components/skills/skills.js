/* eslint-disable react/no-array-index-key */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Skill from './skill'
import Styles from './skills.module.css'

const Projects = () => {
	const {
		allSkillsJson: { nodes: skills },
	} = useStaticQuery(
		graphql`
			query {
				allSkillsJson {
					nodes {
						id
						name
						description
					}
				}
			}
		`
	)
	return (
		<section className={`home-section ${Styles.section}`}>
			<div className="container container--wide home__flexwrap">
				<header className="home__header">
					<h2>Skills</h2>
				</header>

				<div className="home__body">
					<ul className={`list-unstyled ${Styles.list}`}>
						{skills.map((skill, i) => (
							<Skill
								key={i}
								name={skill.name}
								description={skill.description}
							/>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Projects
