import styled from 'styled-components';
import deleteIcon from '../../assets/delete.png';

export type TableDataProps = {
	tableData?: Station[] | null;
	EmptyTableText: string;
	handleDelete: (id: string) => void;
};

const TableWrapper = styled.table`
	margin-top: 25px;
	display: grid;
	border-collapse: collapse;
	min-width: 100%;
	justify-content: center;
	grid-template-columns:
		minmax(150px, 2fr) minmax(150px, 1fr) minmax(150px, 1fr)
		minmax(150px, 1fr) minmax(150px, 0.2fr);

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
		backdrop-filter: blur(7.3px);
		span-align: left;
		font-weight: normal;
		font-size: 1.1rem;
		color: white;
		text-align: left;
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
		span {
			color: white;
		}
		button {
			all: unset;
			display: block;
			cursor: pointer;
			width: fit-content;
			text-align: center;
			img {
				height: 24px;
				width: 24px;
			}
		}
	}
`;

const EmptyWrapper = styled.div`
	margin-top: 25px;
`;

const WeatherStationsTable = ({ tableData, EmptyTableText, handleDelete }: TableDataProps) => {
	if (!tableData || tableData.length === 0) return <EmptyWrapper>{EmptyTableText}</EmptyWrapper>;
	return (
		<TableWrapper>
			<thead>
				<tr>
					<th>
						<span>Name</span>
					</th>
					<th>
						<span>Latitude</span>
					</th>
					<th>
						<span>Longitude</span>
					</th>
					<th>
						<span>Altitude</span>
					</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{tableData.map((data, index) => (
					<tr key={index}>
						<td>
							<span>{data.name}</span>
						</td>
						<td>
							<span>{data.latitude}</span>
						</td>
						<td>
							<span>{data.longitude}</span>
						</td>
						<td>
							<span>{data.altitude}</span>
						</td>
						<td>
							<button onClick={() => handleDelete(data?.id || '')}>
								<img src={deleteIcon} alt="delete" />
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</TableWrapper>
	);
};

export default WeatherStationsTable;
