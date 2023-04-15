import { useState } from 'react';
import Button from '../../shared-components/Button';
import WeatherStationsTable from './WeatherStationsTable';
import styled from 'styled-components';
import StationInput from './StationInput';
import { useIsMobile } from '../../utils/custom-hooks/useIsMobile';
import MobileTable from './MobileTable';
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	transition: all 0.5s;
`;

const WeatherStations = () => {
	const [showStationInput, setShowStationInput] = useState<boolean>(false);
	const queryClient = useQueryClient();
	const isMobile = useIsMobile();
	const { data } = useQuery({
		queryKey: ['weatherStations'],
		queryFn: async (): Promise<Array<Station>> => {
			const { data } = await axios.get(
				`https://api.openweathermap.org/data/3.0/stations?appid=37f2a3dee1cf7dec9f2f1588ba69a71f`
			);
			return data;
		},
	});

	const { mutate } = useMutation({
		mutationFn: async (id: string): Promise<Station> => {
			return await axios.delete(
				`${
					import.meta.env.DEV ? 'api' : 'https://api.openweathermap.org'
				}/data/3.0/stations/${id}?appid=37f2a3dee1cf7dec9f2f1588ba69a71f`,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
		},
		onSuccess: () => {
			queryClient.invalidateQueries(['weatherStations'], { exact: true });
		},
	});

	const handleOnClick = () => setShowStationInput(!showStationInput);

	const handleDelete = (id: string) => mutate(id);

	return (
		<Wrapper>
			<StationInput {...{ show: showStationInput }} />
			<Button {...{ onClick: handleOnClick, label: '+ Add a station' }} />
			{!isMobile && (
				<WeatherStationsTable
					{...{
						tableData: data,
						EmptyTableText: 'Your weather stations will be listed here',
						handleDelete,
					}}
				/>
			)}
			{isMobile && (
				<MobileTable
					{...{
						tableData: data,
						EmptyTableText: 'Your weather stations will be listed here',
						handleDelete,
					}}
				/>
			)}
		</Wrapper>
	);
};

export default WeatherStations;
