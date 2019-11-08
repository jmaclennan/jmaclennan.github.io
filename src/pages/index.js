import React, { useState, useEffect } from 'react'
import { CookiesProvider, useCookies } from 'react-cookie'
import Layout from '../components/layout'
import Projects from '../components/project/projects'
import Experiences from '../components/experience/experiences'
import Skills from '../components/skills/skills'
import Intro from '../components/intro/intro'

const IndexPage = () => {
	const bodyVisibilityTimeout = 500
	const cookieConfig = {
		name: 'intro',
		path: '/',
		timeout: 3600,
		sameSite: 'lax',
	}
	const [playIntro, setPlayIntro] = useState(false)
	const [bodyVisibility, setBodyVisibility] = useState(false)
	const [cookies, setCookie] = useCookies([cookieConfig.name])

	const unmountIntro = () => {
		setPlayIntro(false)
		setBodyVisibility(true)
	}

	useEffect(() => {
		if (!cookies[cookieConfig.name]) {
			setPlayIntro(true)
			setCookie(cookieConfig.name, true, {
				path: cookieConfig.path,
				maxAge: cookieConfig.timeout,
				sameSite: cookieConfig.sameSite,
			})
			setTimeout(() => {
				setBodyVisibility(true)
			}, bodyVisibilityTimeout)
		} else {
			setBodyVisibility(true)
		}
	}, [
		cookieConfig.name,
		cookieConfig.path,
		cookieConfig.sameSite,
		cookieConfig.timeout,
		cookies,
		setCookie,
	])

	return (
		<CookiesProvider>
			{playIntro ? <Intro unmountIntro={unmountIntro} /> : null}
			<Layout home visibility={bodyVisibility}>
				<Projects />
				<Experiences />
				<Skills />
			</Layout>
		</CookiesProvider>
	)
}

export default IndexPage
