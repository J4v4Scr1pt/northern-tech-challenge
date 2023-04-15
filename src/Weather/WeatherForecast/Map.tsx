import styled from 'styled-components';

const Img = styled.img`
	margin-top: 25px;
	height: 200px;
	width: 200px;
`;

const Map = ({ city }: { city: string }) => {
	if (!city || city === '') return null;
	return (
		<Img
			src={`https://maps.googleapis.com/maps/api/staticmap?center=${city}&zoom=13&size=400x400&scale=2&key=AIzaSyCfBzkcysxJ-_vQjVwJVnKTpm5hKZD5hmQ`}
		/>
	);
};

export default Map;
