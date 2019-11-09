/* eslint-disable react/no-array-index-key */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Experience from './experience'
import Styles from './experience.module.css'

const Experiences = () => {
	const {
		dataJson: { experience: experiences },
	} = useStaticQuery(
		graphql`
			query {
				dataJson {
					experience {
						title
						company
						years
						contract
						notes
					}
				}
			}
		`
	)

	return (
		<section className={Styles.sectionExperience}>
			<div className="container home__flexwrap">
				<header className="home__header">
					<h2 className={Styles.heading}>Recent Experience</h2>
				</header>
				<ul className={`home__body ${Styles.list}`}>
					{experiences.map((experience, i) => {
						return (
							<Experience
								key={i}
								bottomOffset={experience.bottomOffset}
								company={experience.company}
								title={experience.title}
								years={experience.years}
								contract={experience.contract}
								notes={experience.notes}
							/>
						)
					})}
				</ul>
			</div>
		</section>
	)
}

export default Experiences
