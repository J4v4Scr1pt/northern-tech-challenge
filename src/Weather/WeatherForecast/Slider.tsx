import styled, { keyframes } from 'styled-components';

const SwitchRight = keyframes`
0% {
    max-width: 10.1em;
}

33% {
    max-width: 19.4em;
}

66% {   
    max-width: 19.4em;
    transform: translateX(0em);
}

100% {  
    max-width: 9.9em;
    transform: translateX(10em);
}
`;

const SwitchLeft = keyframes`
0% {
    max-width: 9.9em;
    transform: translateX(10.1em);
}

33% {
    max-width: 19.4em;
    transform: translateX(0em);
}

66% {
    max-width: 19.4em;
}

100% {
    max-width: 10.1em;
}
`;

const SliderWrapper = styled.label`
	position: relative;
	isolation: isolate;
	cursor: pointer;
	width: fit-content;
	margin-top: 25px;
	& .slider {
		position: absolute;
		display: block;
		border-radius: 3px;
		background-color: #205ad2;
		width: 100%;
		max-width: 10.1em;
		height: 2em;
		z-index: -1;
		animation: ${SwitchLeft} 0.5s ease forwards;
	}
	& > input {
		top: 0;
		left: -10000px;
		position: absolute;
		&:focus-visible + .slider {
			border: 3px solid #921267;
		}
		&:checked + .slider {
			animation: ${SwitchRight} 0.5s ease forwards;
		}
	}
	& .option {
		color: white;
		padding: 3px;
		margin: 0px 5px;
		font-size: 1.2em;
		font-weight: bold;
		display: inline-block;
	}
`;

type Props = {
	handleSwitch: () => void;
	defaultChecked: boolean;
};

const Slider = ({ handleSwitch, defaultChecked }: Props) => {
	return (
		<SliderWrapper {...{ onChange: handleSwitch }}>
			<input type="checkbox" defaultChecked={defaultChecked} />
			<div className="slider"></div>
			<div className="option">Current weather</div>
			<div className="option">5 days forecast</div>
		</SliderWrapper>
	);
};

export default Slider;
