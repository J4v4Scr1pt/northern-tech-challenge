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
		margin-top: 90px;
	}
	h1:nth-of-type(2) {
		margin-top: 70px;
	}
	h2:nth-of-type(2) {
		margin-top: 50px;
	}
	h2:nth-of-type(1) {
		margin-top: 50px;
	}
	span {
		margin: 0 25px;
	}
	span:last-of-type {
		margin-bottom: 80px;
	}
	ul {
		li {
			font-weight: bold;
			margin-top: 25px;
		}
		ul {
			li {
				font-weight: normal;
				margin-top: 0;
			}
		}
	}
`;

const About = () => {
	return (
		<Wrapper>
			<h1>Why did you choose;</h1>
			<h2>The technology, tools and workflow</h2>
			<span>
				<ul>
					<li>Workflow 🏃‍♂️</li> I usually start with reading the documentation/task then look at the
					design. Then for a reasonable time decide on technology and tools. Then I install and
					cofigure the basics like bundler, framework etc. After that I create a rough folder
					structure that I think will suit the needs. Start with the basic layout and run the
					application. Then focus on one small view at the time. Depending on the size of feature I
					add test after or during each view. When I feel I have a stable build locally I merge. If
					the feature is behind some kind of feature flag I tend to merge to master faster because I
					think its better to merge small things to master rather than one big branch.
					<li>Framework 🕸</li>I choose React because it is well battle tested. I first thought about
					doing it in Svelte or Qwik, but did go with React because I am most familiar with it and
					because of the timeframe for this challange. (I do have a hobby project using Qwik 😁.)
					<li>Styling 💅</li>
					For styling I choose Styled-Components because to me CSS-in-JS is the best DX. But I do
					think Tailwind or Vanilla-extract is really interesting and is the way forward.
					<li>Bundler 🤸‍♂️</li>I am most familiar with Webpack, but I choose Vite because it is really
					easy to get started with and I think will be the new standard. But most importantly it is
					suuper fast locally. Even though it is easy to setup with almost zero configuration, you
					can still heavily customize it.
					<li>Programming language 👨‍💻</li>
					To say that TypeScript is a programming language is debatable 😅. But I think when writing
					javascript you really benefit from having Types. It really helps with many easy to miss
					things and I think when you get used with it you write faster and more stable code. It
					also helps with maintainability.
					<li>Testing 🧪</li>I have in the past used Jest as a test framework but resently started
					working with Vitest and just like Vite its very easy to setup and comes with many features
					pre-configured, like support for TS, ESM and JSX. And is also super fast. As testing
					library I have worked with Enzyme before but have switched to Testing-Library. Because it
					tests the component behavior rather than implementation details.
					<li>Other 🐱‍👤</li>
					<ul>
						<li>
							Prettier and EsLint are no brainer to me, because it helps so much with avoiding
							those easy pitfalls. And makes sure all that work with the codebase use the same
							codestyling and syntax.
						</li>
						<li>
							Axios I use because of how easy it is to work with and you get many things out of
							the box like cancellation of requests.
						</li>
						<li>
							I choose Tanstack query because having something like Redux for this small project
							is overkill. Tanstack does a really good job of caching and managing the results
							of the API requests and I think Tanstack could be just enough for many big
							projects aswell.
						</li>
						<li>
							Moment is just an old habit of use. I do know there is smaller similar packages
							out there. But moment never disappoints 😅
						</li>
					</ul>
				</ul>
			</span>
			<h1>How would you;</h1>
			<h2>Test the application</h2>
			<span>
				I would beside already implemented Vitest also implement Cypress, Playwright or similar. Then
				during during CI(PR) run viteTest or if the team are up for it implement Husky and set up a
				pre-commit hook that run affected tests. Then after merge to Master when built to
				Sandbox/TestEnv run E2E with Cypress/Playwright. If any fail dont deploy to Prod.
			</span>
			<h2>Make sure the application is fast</h2>
			<span>
				To make sure the application is fast I would run Lighthouse and similar tools to test how the
				application is doing performance wise. Then if the result is bad, I would start tweeking the
				application to only serve the client as minimal javascript possible. I would start look in to
				if there is any API calls that throttle the performance. If possible, I would look in to if we
				could do SSR/SSG on any page. When satisified I would implement Lighthouse to the CI and add a
				Alert if the performance is below a threshold we set. Another thing is to implement
				skeleton-loading to do perceved performance, that would make the performance feel better for
				the end user. Implement Tailwind/vanilla-extract instead of styled-components(SC), because SC
				are generating styles during runtime and that comes with a performance cost even though DX is
				great with css-in-js 😎.
			</span>
			<h2>Ensure it is easy to maintain and easy to extend in the future</h2>
			<span>
				Go through all the files and see if I could structure them even better and make sure the
				readability is as good as possible. I do think the code should speak for it self, but adding
				comments to unclear things. Implement more tests to ensure nothing is break with code changes.
				I do like the Vertical Slice Architecture (also known as Feature Architecture), because it
				makes it easy know where to go if you need to extend features. And you seperate the concerns
				to other to other features. You also make it easy to break out features to Micro-frontends or
				Island Architecture.
			</span>
			<h2>Deploy the application</h2>
			<span>
				This application is already deployed to vercel. The reason being that it is super easy to
				setup pipelines, connect to gitHub and build your application using Vercel.
			</span>
			<h2>Continue development</h2>
			<span>
				Enhance the user experience with better visual feedback, like tooltip, loading
				spinners/skeleton-loading, inputfield/button feedback, etc. I would write more tests that
				includes mocked API calls. Remove the hardcoded API keys and add them as environment variables
				in Vercel. I would also add more types to be able ro remove some use of the aweful
				&apos;any&apos; word. Handle the inital animation of the slider button on Weather forcast tab
				not to fire. change the &apos;:has&apos; css-selector because FireFox has currently limited
				support for it.
			</span>
		</Wrapper>
	);
};

export default About;
