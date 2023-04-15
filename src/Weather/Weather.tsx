import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
	nav {
		border-bottom: 3px solid #205ad2;
		margin-bottom: 25px;
	}
	ul {
		list-style-type: none;
		display: flex;
		padding: 0;
		margin: 0;
	}
	a {
		all: unset;
		cursor: pointer;
		height: 100%;
		width: 100%;
		&:hover {
			color: white;
			background-color: #205ad2;
		}
		&.active {
			color: white;
			background-color: #205ad2;
		}
	}
	li {
		padding: 12px;
		border: 1px solid #205ad2;
		border-radius: 8px 8px 0 0;
		&:hover {
			color: white;
			background-color: #205ad2;
		}
	}

	li:has(a.active) {
		background-color: #205ad2;
	}

	ul li:last-child {
		margin-left: 5px;
	}
`;

const Weather = () => {
	return (
		<Wrapper>
			<nav>
				<ul>
					<li>
						<NavLink to="weather-forecast">Weather forcast</NavLink>
					</li>
					<li>
						<NavLink to="my-weather-stations">My Weather Stations</NavLink>
					</li>
				</ul>
			</nav>
			<Outlet />
		</Wrapper>
	);
};

export default Weather;
