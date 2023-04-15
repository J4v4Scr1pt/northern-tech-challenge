import styled from 'styled-components';
import deleteIcon from '../../assets/delete.png';
import { TableDataProps } from './WeatherStationsTable';

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
		padding-left: 75%;
		span {
			color: white;
		}
		button {
			all: unset;
			cursor: pointer;
			img {
				height: 24px;
				width: 24px;
			}
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
		content: 'Name';
		color: white;
	}
	td:nth-of-type(2):before {
		content: 'Latitude';
		color: white;
	}
	td:nth-of-type(3):before {
		content: 'Longitude';
		color: white;
	}
	td:nth-of-type(4):before {
		content: 'Altitude';
		color: white;
	}
`;

const EmptyWrapper = styled.div`
	margin-top: 25px;
`;

const MobileTable = ({ tableData, EmptyTableText, handleDelete }: TableDataProps) => {
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

export default MobileTable;
