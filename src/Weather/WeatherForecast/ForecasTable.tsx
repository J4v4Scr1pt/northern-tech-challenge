import moment from 'moment';
import styled from 'styled-components';

export type TableDataProps = {
	isLoading: boolean;
	error: any;
	tableData?: CurrentWeather | null;
};

const TableWrapper = styled.table`
	display: grid;
	border-collapse: collapse;
	min-width: 100%;
	justify-content: center;
	grid-template-columns:
		minmax(50px, 1.4fr) minmax(50px, 1.67fr) minmax(50px, 1.67fr)
		minmax(50px, 1.67fr) minmax(50px, 1.2fr) minmax(50px, 1.2fr);

	thead,
	tbody,
	tr {
		display: contents;
	}

	th,
	td {
		padding: 15px;
		overflow: hidden;
		span-overflow: ellipsis;
		white-space: nowrap;
	}

	th {
		position: sticky;
		top: -15px;
		font-size: 1.1rem;
		color: white;
		text-align: center;
		backdrop-filter: blur(7.3px);
		span {
			color: white;
		}
	}

	th:last-child {
		border: 0;
	}

	td {
		padding-top: 10px;
		padding-bottom: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		span {
			color: white;
		}
	}
`;

const EmptyWrapper = styled.div`
	margin-top: 25px;
`;

const ForecasTable = ({ isLoading, error, tableData }: TableDataProps) => {
	if (isLoading && tableData) return <EmptyWrapper>Loading...</EmptyWrapper>;
	if (error) return <EmptyWrapper>No City Found</EmptyWrapper>;
	if (!tableData)
		return <EmptyWrapper>Search for a city above to see the current weather information</EmptyWrapper>;

	return (
		<TableWrapper>
			<thead>
				<tr>
					<th></th>
					<th></th>
					<th></th>
					<th></th>
					<th>High</th>
					<th>Low</th>
				</tr>
			</thead>
			{tableData?.list && (
				<tbody>
					{tableData.list.map((data, index) => (
						<tr key={index}>
							<td>
								<span>{moment(data.dt_txt).format('ddd | MMM | DD | YYYY')}</span>
							</td>
							<td>
								<span>{moment(data.dt_txt).format('HH:mm')}</span>
							</td>
							<td>
								<img
									src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
									alt="wt"
								/>
							</td>
							<td>
								<span>{data.weather[0].main}</span>
							</td>
							<td>
								<span>{data.main.temp_max} °C</span>
							</td>
							<td>
								<span>{data.main.temp_min} °C</span>
							</td>
						</tr>
					))}
				</tbody>
			)}
			{!tableData?.list && (
				<tbody>
					<tr>
						<td>
							<span>{moment().format('ddd | MMM | DD | YYYY')}</span>
						</td>
						<td>
							<span>Today</span>
						</td>
						<td>
							<img
								src={`https://openweathermap.org/img/wn/${tableData.weather[0].icon}.png`}
								alt="wt"
							/>
						</td>
						<td>
							<span>{tableData.weather[0].main}</span>
						</td>
						<td>
							<span>{tableData.main.temp_max} °C</span>
						</td>
						<td>
							<span>{tableData.main.temp_min} °C</span>
						</td>
					</tr>
				</tbody>
			)}
		</TableWrapper>
	);
};

export default ForecasTable;
