import styled from 'styled-components';

type Props = {
	onClick: () => void;
	label: string;
	disabled?: boolean;
};

const StyledButton = styled.button`
	color: white;
	border: 6px solid #205ad2;
	border-radius: 15px;
	padding: 8px 15px;
	background-color: black;
	cursor: pointer;
	letter-spacing: 3px;
	font-weight: 900;

	&:hover {
		color: black;
		background-color: #205ad2;
	}
	&:active {
		transform: scale(0.98);
	}
`;

const Button = ({ onClick, label, disabled = false }: Props) => (
	<StyledButton {...{ onClick, disabled }}>{label}</StyledButton>
);

export default Button;
