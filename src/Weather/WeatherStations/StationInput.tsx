import styled from 'styled-components';
import Input from '../../shared-components/Input';
import Button from '../../shared-components/Button';
import { ChangeEvent, useEffect, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

type Props = {
	show: boolean;
};

const Wrapper = styled.div<{ show: boolean }>`
	display: flex;
	flex-direction: column;
	width: 100%;
	overflow: hidden;
	opacity: ${({ show }) => (show ? '1' : '0')};
	max-height: ${({ show }) => (show ? '100%' : '0')};
	margin-bottom: ${({ show }) => (show ? '25px' : '0')};
	transition: all 300ms;

	span {
		margin-top: 10px;
		color: #cf3232;
		font-style: italic;
	}
`;

const Wrapper2 = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;

	@media (max-width: 1080px) {
		flex-direction: column;
		& > input {
			margin-bottom: 12px;
		}
	}
`;

const StationInput = ({ show }: Props) => {
	const [canSave, setCanSave] = useState<boolean>(false);
	const [error, setError] = useState<string>('');
	const queryClient = useQueryClient();
	const [weatherStation, setWeatherStation] = useState<Station>({
		external_id: '',
		name: '',
		latitude: 0,
		longitude: 0,
		altitude: 0,
	});

	const { mutate } = useMutation({
		mutationFn: async (newStation: Station): Promise<Station> => {
			return await axios.post(
				`${
					import.meta.env.DEV ? 'api' : 'https://api.openweathermap.org'
				}/data/3.0/stations?appid=37f2a3dee1cf7dec9f2f1588ba69a71f`,
				newStation,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
		},
		onError: (error: any, variables, context) => {
			setError(error.response.data.message);
		},
		onSuccess: (data) => {
			queryClient.setQueryData(['weatherStations', data.id], data);
			queryClient.invalidateQueries(['weatherStations'], { exact: true });
			setWeatherStation({ external_id: '', name: '', latitude: 0, longitude: 0, altitude: 0 });
			setError('');
		},
	});

	const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
		setWeatherStation({ ...weatherStation, name: e.currentTarget.value });
	const onChangeLatitude = (e: ChangeEvent<HTMLInputElement>) =>
		setWeatherStation({ ...weatherStation, latitude: +e.currentTarget.value });
	const onChangeLongitude = (e: ChangeEvent<HTMLInputElement>) =>
		setWeatherStation({ ...weatherStation, longitude: +e.currentTarget.value });
	const onChangeAltitude = (e: ChangeEvent<HTMLInputElement>) =>
		setWeatherStation({ ...weatherStation, altitude: +e.currentTarget.value });

	const onClick = () => {
		mutate({
			...weatherStation,
			external_id: `Test_Station_${URL.createObjectURL(new Blob([])).slice(-36)}`,
		});
	};

	useEffect(() => {
		if (
			weatherStation.name !== '' &&
			weatherStation.latitude !== 0 &&
			weatherStation.longitude !== 0 &&
			weatherStation.altitude !== 0
		) {
			setCanSave(true);
			return;
		}
		setCanSave(false);
	}, [weatherStation]);

	return (
		<Wrapper {...{ show }}>
			<Wrapper2>
				<Input {...{ onChange: onChangeName, value: weatherStation.name, placeholder: 'Name' }} />
				<Input
					{...{
						onChange: onChangeLatitude,
						value: weatherStation.latitude,
						placeholder: 'Latitude (-90:90)',
						isNumberOnly: true,
					}}
				/>
				<Input
					{...{
						onChange: onChangeLongitude,
						value: weatherStation.longitude,
						placeholder: 'Longitude(-180:180)',
						isNumberOnly: true,
					}}
				/>
				<Input
					{...{
						onChange: onChangeAltitude,
						value: weatherStation.altitude,
						placeholder: 'Altitude',
						isNumberOnly: true,
					}}
				/>
				<Button {...{ onClick, label: 'Save', disabled: !canSave }} />
			</Wrapper2>
			{error.length > 0 && <span>Error: {error}</span>}
		</Wrapper>
	);
};

export default StationInput;
