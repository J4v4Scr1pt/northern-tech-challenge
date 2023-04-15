import { ChangeEventHandler } from 'react';
import styled from 'styled-components';

type Props = {
	onChange: ChangeEventHandler<HTMLInputElement>;
	dataTestid?: string;
	searchInput?: boolean;
	isNumberOnly?: boolean;
	placeholder: string;
	value?: string | number;
};

const StyledInput = styled.input<Props>`
	font-size: 16px;
	line-height: 1.5;
	background: #ffffff;
	::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	${({ searchInput }) =>
		searchInput
			? `	background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='19' height='19' viewBox='0 0 19 19'><path fill='%23838D99' d='M13.98 12.57a2 2 0 0 1 1.93.52l2.5 2.5a2 2 0 0 1-2.82 2.82l-2.5-2.5a2 2 0 0 1-.52-1.93l-1.38-1.37a7 7 0 1 1 1.42-1.42l1.37 1.38zm-3.37-2.03a5 5 0 1 0-7.08-7.08 5 5 0 0 0 7.08 7.08z'></path></svg>");
	background-repeat: no-repeat;
	background-position: 10px 10px;
	background-size: 20px 20px;`
			: ''}
	border: 1px solid #c5cbd5;
	box-shadow: inset 0 1px 4px 0 rgba(0, 0, 0, 0.2);
	border-radius: 8px;
	padding: ${({ searchInput }) => (searchInput ? '0.5em 1em 0.5em 2.5em' : '0.5em 1em')};
	&:focus {
		outline: none;
		border: 1px solid #921267;
	}
`;

const Input = ({
	onChange,
	dataTestid,
	searchInput = false,
	placeholder,
	isNumberOnly = false,
	value,
}: Props) => {
	return (
		<StyledInput
			type={isNumberOnly ? 'number' : 'text'}
			step="any"
			data-testid={dataTestid}
			value={value ? value : ''}
			{...{ onChange, searchInput, placeholder }}
		/>
	);
};

export default Input;
