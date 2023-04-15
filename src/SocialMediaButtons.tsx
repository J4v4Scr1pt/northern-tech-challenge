import styled from 'styled-components';

const LinkedInBar = styled.div`
	position: absolute;
	top: -15%;
	left: -5%;
	width: 110%;
	height: 5px;
	border-radius: 8px;
	transition: all 0.25s ease-in-out;
	background-color: #0a66c2;
`;
const LinkedInButton = styled.div`
	background-image: url(https://cdn-icons-png.flaticon.com/128/3536/3536505.png);
	position: relative;
	width: 70px;
	height: 70px;
	margin: 20px;
	background-size: cover;
	cursor: pointer;
	border: none;
	outline: none;
	background-color: transparent;
	filter: grayscale(100%);
	transition: all 0.25s ease-in-out;
	&:hover {
		filter: grayscale(0%);
		${LinkedInBar} {
			top: 115%;
		}
	}
`;
const GithubBar = styled.div`
	position: absolute;
	top: -15%;
	left: -5%;
	width: 110%;
	height: 5px;
	border-radius: 8px;
	transition: all 0.25s ease-in-out;
	background-color: #6e5494;
`;
const GithubButton = styled.div`
	background-image: url(https://cdn-icons-png.flaticon.com/512/733/733553.png);
	position: relative;
	width: 70px;
	height: 70px;
	margin: 20px;
	background-size: cover;
	cursor: pointer;
	border: none;
	outline: none;
	background-color: transparent;
	filter: grayscale(100%);
	transition: all 0.25s ease-in-out;
	&:hover {
		filter: grayscale(0%);
		${GithubBar} {
			top: 115%;
		}
	}
`;
const SocialButtonsWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const SocialMediaButtons = () => {
	return (
		<SocialButtonsWrapper>
			<LinkedInButton
				{...{
					onClick: () => window.open('https://www.linkedin.com/in/tomasostlind/', '_blank'),
				}}>
				<LinkedInBar />
			</LinkedInButton>
			<GithubButton
				{...{
					onClick: () =>
						window.open('https://github.com/J4v4Scr1pt/northern-tech-challenge', '_blank'),
				}}>
				<GithubBar />
			</GithubButton>
		</SocialButtonsWrapper>
	);
};

export default SocialMediaButtons;
