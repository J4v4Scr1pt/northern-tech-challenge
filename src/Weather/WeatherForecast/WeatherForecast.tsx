import styled from 'styled-components';
import Input from '../../shared-components/Input';
import Slider from './Slider';
import { ChangeEvent, useEffect, useState } from 'react';
import ForecasTable from './ForecasTable';
import Map from './Map';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useDebouncedEffect } from '../../utils/custom-hooks/useDebouncedEffect';
import { useIsMobile } from '../../utils/custom-hooks/useIsMobile';
import MobileTable from './MobileTable';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	h2 {
		margin-bottom: 0;
		margin-top: 40px;
	}
`;

const WrapperListAndMap = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 25px;
`;

const WrapperInputAndSlider = styled.div`
	display: flex;
	flex-direction: column;
`;

const WeatherForecast = () => {
	const { isLoading, error, data, refetch } = useQuery({
		queryKey: ['weatherForecasts'],
		queryFn: async ({ signal }): Promise<CurrentWeather> => {
			const { data } = await axios.get(
				`https://api.openweathermap.org/data/2.5/${
					todaysWeather ? 'forecast' : 'weather'
				}?q=${city}&appid=37f2a3dee1cf7dec9f2f1588ba69a71f&units=metric`,
				{
					signal,
				}
			);
			return data;
		},
		enabled: false,
	});
	const [todaysWeather, setTodaysWeather] = useState<boolean>(!!data?.list);
	const [city, setCity] = useState<string>((todaysWeather ? data?.city?.name : data?.name) || '');

	const queryClient = useQueryClient();
	const isMobile = useIsMobile();

	useDebouncedEffect(refetch, [city], 400);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		queryClient.cancelQueries({ queryKey: ['weatherForecasts'] });
		setCity(e.currentTarget.value);
	};
	const handleSwitch = () => setTodaysWeather(!todaysWeather);

	useEffect(() => {
		if (city?.length > 0) refetch();
	}, [todaysWeather]);

	return (
		<Wrapper>
			<WrapperInputAndSlider>
				<Input
					{...{
						onChange,
						searchInput: true,
						value: city,
						dataTestid: 'weather-input',
						placeholder: 'Search for city',
					}}
				/>
				<Slider {...{ handleSwitch, defaultChecked: todaysWeather }} />
				{data && (
					<h2>{`Current info for ${(todaysWeather ? data?.city?.name : data?.name) || ''}`}</h2>
				)}
			</WrapperInputAndSlider>
			<Map {...{ city: (todaysWeather ? data?.city?.name : data?.name) || '' }} />
			<WrapperListAndMap>
				{!isMobile && (
					<ForecasTable
						{...{
							isLoading,
							error,
							tableData: data,
						}}
					/>
				)}
				{isMobile && (
					<MobileTable
						{...{
							isLoading,
							error,
							tableData: data,
						}}
					/>
				)}
			</WrapperListAndMap>
		</Wrapper>
	);
};

export default WeatherForecast;
