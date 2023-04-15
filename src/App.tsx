import { lazy, Suspense } from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyles';
import SocialMediaButtons from './SocialMediaButtons';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const About = lazy(() => import('./About/About'));
const Weather = lazy(() => import('./Weather/Weather'));
const WeatherStations = lazy(() => import('./Weather/WeatherStations/WeatherStations'));
const WeatherForecast = lazy(() => import('./Weather/WeatherForecast/WeatherForecast'));

const Wrapper = styled.div`
	overflow: hidden;
	display: grid;
	grid-template: 100px calc(100vh - 210px) max-content / 100vw;
	grid-template-areas:
		'header'
		'main-content'
		'footer';
`;

const Header = styled.div`
	grid-area: header;
	nav {
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	h1 {
		font-size: clamp(1rem, 4vw, 3rem);
		margin: 0;
		margin-left: 15px;
		color: #921267;
	}

	ul {
		list-style-type: none;
		display: flex;
		margin-right: 15px;
	}

	a {
		all: unset;
		cursor: pointer;
		&:hover {
			color: #205ad2;
		}
		&.active {
			color: #205ad2;
		}
	}

	ul li:last-child {
		margin-left: 10px;
	}
`;

const MainContent = styled.div`
	padding: 15px;
	overflow: auto;
	grid-area: main-content;
	scroll-behavior: smooth;
	background-color: rgb(23, 25, 29);
`;
const InnerWrapper = styled.div`
	margin-top: 20px;
	max-width: 1200px;
	margin-left: auto;
	margin-right: auto;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
	row-gap: 24px;
`;

const Footer = styled.div`
	grid-area: footer;
`;

const queryClient = new QueryClient();

const App = () => {
	return (
		<Wrapper>
			<GlobalStyle />
			<Header>
				<nav>
					<h1>Weather App</h1>
					<ul>
						<li>
							<NavLink to="weather">Weather</NavLink>
						</li>
						<li>
							<NavLink to="about">About</NavLink>
						</li>
					</ul>
				</nav>
			</Header>
			<QueryClientProvider client={queryClient}>
				<MainContent>
					<InnerWrapper>
						<Suspense fallback="Loading...">
							<Routes>
								<Route path="*" element={<Navigate to="/weather/weather-forecast" />} />
								<Route path="weather" element={<Weather />}>
									<Route path="weather-forecast" element={<WeatherForecast />} />
									<Route path="my-weather-stations" element={<WeatherStations />} />
									<Route index element={<Navigate to="weather-forecast" />} />
								</Route>
								<Route path="about" element={<About />} />
							</Routes>
						</Suspense>
					</InnerWrapper>
				</MainContent>
				{/* <ReactQueryDevtools initialIsOpen={false} /> */}
			</QueryClientProvider>
			<Footer>
				<SocialMediaButtons />
			</Footer>
		</Wrapper>
	);
};

export default App;
