import styled from 'styled-components';
import moment from 'moment';

export type TableDataProps = {
	isLoading: boolean;
	error: any;
	tableData?: CurrentWeather | null;
};

const TableWrapper = styled.table`
	table {
		width: 100%;
		border-collapse: collapse;
	}

	td,
	th {
		padding: 6px;
		border: 1px solid #ccc;
		text-align: left;
	}
	table,
	thead,
	tbody,
	th,
	td,
	tr {
		display: block;
	}
	thead tr {
		position: absolute;
		top: -9999px;
		left: -9999px;
	}

	tr {
		margin-top: 15px;
		border-bottom: 1px solid #1c3f91;
	}

	td {
		border: none;
		position: relative;
		padding-left: 50%;
		span {
			color: white;
		}
		button {
			all: unset;
			cursor: pointer;
		}
	}

	td:before {
		position: absolute;
		top: 6px;
		left: 6px;
		width: 45%;
		padding-right: 10px;
		white-space: nowrap;
	}
	td:nth-of-type(1):before {
		content: 'Date';
		color: white;
	}
	td:nth-of-type(2):before {
		content: 'Time';
		color: white;
	}

	td:nth-of-type(4):before {
		content: 'Forecast';
		color: white;
	}
	td:nth-of-type(5):before {
		content: 'High';
		color: white;
	}
	td:nth-of-type(6):before {
		content: 'Low';
		color: white;
	}
`;

const EmptyWrapper = styled.div`
	margin-top: 25px;
`;

const MobileTable = ({ isLoading, error, tableData }: TableDataProps) => {
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

export default MobileTable;
