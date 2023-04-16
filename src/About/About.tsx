import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	h1 {
		text-align: center;
		width: 100%;
		margin-bottom: 0;
	}

	h2 {
		text-align: center;
		border-bottom: 1px solid blue;
		width: 100%;
		margin-top: 100px;
	}
	h2:nth-of-type(1) {
		margin-top: 50px;
	}
	span {
		margin: 0 25px;
	}
`;

const About = () => {
	return (
		<Wrapper>
			<h1>How would you;</h1>
			<h2>Test the application</h2>
			<span>
				I would beside already implemented viteTest also implement Cypress, Playwright or similar.
				Then during during CI(PR) run viteTest or if the team are up for it implement Husky and set up
				a pre-commit hook that run affected tests. Then after merge to Master when built to
				Sandbox/TestEnv run E2E with Cypress/Playwright. If any fail dont deploy to Prod.
			</span>
			<h2>Make sure the application is fast</h2>
			<span>
				To make sure the application is fast I would run Lighthouse and similar tools to test how the
				application is doing performance wise. Then if the result is bad, I would start tweeking the
				application to only serve the client as minimal javascript possible. I would start look in to
				if there is any API calls that throttle the performance. If possible, I would look in to if we
				could do SSR/SSG on any page. When satisified I would try to implement Lighthouse reporting to
				the CI and add Alert if the performance is below a threshold we set. Another thing is to
				implement skeleton-loading to do preceved performance, that would make the performance feel
				better for the end user. Implement Tailwind/vanilla-extract instead of styled-components(SC),
				because SC are generating styles during runtime and that comes with a performance cost but DX
				is great with css-in-js.
			</span>
			<h2>Ensure it is easy to maintain and easy to extend in the future</h2>
			<span>
				Go through all the files and see if I could structure them even better. Implement more tests
				to ensure nothing is break with code changes.
			</span>
			<h2>Deploy the application</h2>
			<span>
				This application is already deployed to vercel. The reason being that it is super easy to
				setup pipelines, connect to gitHub and build your application using Vercel.
			</span>
		</Wrapper>
	);
};

export default About;
