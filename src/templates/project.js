/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Image from 'gatsby-image'
import { useMediaQuery } from 'react-responsive'
import Carousel from 'react-slick'
import Layout from '../components/layout'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Styles from '../components/project/project-detail.module.css'
import PillStyles from '../css/components/pill.module.css'

export default ({
	data: {
		allProjectsJson: {
			nodes: { 0: project },
		},
		mobileImages: {
			nodes: {
				0: { images: mobileImages },
			},
		},
		desktopImages: {
			nodes: {
				0: { images: desktopImages },
			},
		},
	},
}) => {
	const carouselConfig = {
		centerMode: true,
		variableWidth: true,
		dots: true,
		adaptiveHeight: true,
		focusOnSelect: true,
		arrows: false,
		touchThreshold: 100,
	}
	const isDesktop = useMediaQuery({
		query: '(min-width: 700px)',
	})
	return (
		<Layout>
			<section className={Styles.description}>
				<div className="container">
					<header className={Styles.header}>
						<h2 className={Styles.heading}>{project.name}</h2>
						<span className={Styles.year}>{project.year}</span>
					</header>

					<div className={Styles.copy}>
						<div className={Styles.description}>
							{project.copy.map((paragraph, i) => (
								<p key={i}>{paragraph}</p>
							))}
						</div>

						<div className={Styles.tools}>
							<h3>Built with:</h3>
							<ul className="list-unstyled">
								{project.tools.map((tool, i) => (
									<li key={i} className={PillStyles.pill}>
										{tool}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className={`${Styles.section} ${Styles.images}`}>
				<Carousel {...carouselConfig}>
					{mobileImages.map((image, i) => {
						return (
							<li key={i} className={Styles.image}>
								<Image
									fixed={
										isDesktop
											? desktopImages[i].src
													.childImageSharp.fixed
											: mobileImages[i].src
													.childImageSharp.fixed
									}
									alt={`${project.name} screenshot`}
									style={{
										display: 'block',
										position: 'relative',
										margin: '0 15px 0 15px',
										borderRadius: '2px',
										border: `solid 1px #dcdcdc`,
									}}
								/>
							</li>
						)
					})}
				</Carousel>
			</section>
		</Layout>
	)
}

// eslint-disable-next-line no-undef
export const query = graphql`
	query($id: String!) {
		allProjectsJson(filter: { id: { eq: $id } }) {
			nodes {
				id
				name
				year
				copy
				tools
			}
		}
		mobileImages: allProjectsJson(filter: { id: { eq: $id } }) {
			nodes {
				images {
					src {
						childImageSharp {
							fixed(height: 250) {
								...GatsbyImageSharpFixed_withWebp
							}
						}
					}
				}
			}
		}
		desktopImages: allProjectsJson(filter: { id: { eq: $id } }) {
			nodes {
				images {
					src {
						childImageSharp {
							fixed(height: 500, quality: 100) {
								...GatsbyImageSharpFixed_withWebp
							}
						}
					}
				}
			}
		}
	}
`
