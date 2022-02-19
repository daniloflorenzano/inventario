import * as React from 'react';
import {
	DataGrid,
	GridActionsCellItem,
	GridColDef,
	GridRenderCellParams,
	GridToolbar,
} from '@mui/x-data-grid';
import { Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import styles from '../styles/Home.module.css';

const renderStateStyle = (params: GridRenderCellParams<string>) => {
	let value = params.value;

	if (value === 'Bom') {
		return <p className={styles.dataTableStateGreen}>Bom</p>;
	} else if (value === 'Necessário troca') {
		return <p className={styles.dataTableStateRed}>Necessário troca</p>;
	} else return <p className={styles.dataTableStateOrange}>Gasto</p>;
};

const columns = [
	{ field: 'id', headerName: 'Código', width: 90, disableColumnMenu: true },
	{
		field: 'descricao',
		headerName: 'Descrição',
		width: 130,
		disableColumnMenu: true,
	},
	{ field: 'local', headerName: 'Local', width: 190, disableColumnMenu: true },
	{
		field: 'estado',
		headerName: 'Estado de Conservação',
		width: 190,
		disableColumnMenu: true,
		renderCell: renderStateStyle,
	},
	{
		field: 'data',
		headerName: 'Data de Registro',
		width: 150,
		disableColumnMenu: true,
	},
	{
		field: 'obs',
		headerName: 'Observações',
		sortable: false,
		width: 220,
		disableColumnMenu: true,
	},
	{
		field: 'excluir',
		type: 'actions',
		width: 80,
		getActions: (params: any) => [
			<GridActionsCellItem
				key={params.id}
				icon={<EditIcon />}
				label='Delete'
				onClick={() => console.log(params.id)}
			/>,
			<GridActionsCellItem
				key={params.id}
				icon={<DeleteIcon />}
				label='Delete'
				onClick={() => console.log(params.id)}
			/>,
		],
	},
];

const rows = [
	{
		id: 1,
		descricao: 'Monitor',
		local: 'Informática',
		estado: 'Bom',
		data: '18/02/2022',
		obs: 'Teste',
	},
	{
		id: 2,
		descricao: 'Cadeira',
		local: 'Faturamento',
		estado: 'Bom',
		data: '18/02/2022',
		obs: 'Teste',
	},
	{
		id: 3,
		descricao: 'Maca',
		local: 'Clínica Cirúrgica',
		estado: 'Necessário troca',
		data: '18/02/2022',
		obs: 'Teste',
	},
	{
		id: 4,
		descricao: 'Computador',
		local: 'Comunicação',
		estado: 'Bom',
		data: '18/02/2022',
		obs: 'Teste',
	},
	{
		id: 5,
		descricao: 'Impressora',
		local: 'Almoxarifado',
		estado: 'Bom',
		data: '18/02/2022',
		obs: 'Marca HP',
	},
	{
		id: 6,
		descricao: 'Notebook',
		local: 'Qualidade',
		estado: 'Bom',
		data: '18/02/2022',
		obs: 'Teste',
	},
	{
		id: 7,
		descricao: 'Notebook',
		local: 'Compras',
		estado: 'Bom',
		data: '18/02/2022',
		obs: 'Teste',
	},
	{
		id: 8,
		descricao: 'Monitor',
		local: 'Departamento Pessoal',
		estado: 'Gasto',
		data: '18/02/2022',
		obs: 'Teste',
	},
	{
		id: 9,
		descricao: 'Roxie',
		local: 'Harvey',
		estado: 'Bom',
		data: '18/02/2022',
		obs: 'Teste',
	},
	{
		id: 10,
		descricao: 'Roxie',
		local: 'Harvey',
		estado: 'Bom',
		data: '18/02/2022',
		obs: 'Teste',
	},
	{
		id: 11,
		descricao: 'Roxie',
		local: 'Harvey',
		estado: 'Bom',
		data: '18/02/2022',
		obs: 'Teste',
	},
	{
		id: 12,
		descricao: 'Roxie',
		local: 'Harvey',
		estado: 'Bom',
		data: '18/02/2022',
		obs: 'Teste',
	},
	{
		id: 13,
		descricao: 'Roxie',
		local: 'Harvey',
		estado: 'Bom',
		data: '18/02/2022',
		obs: 'Teste',
	},
	{
		id: 14,
		descricao: 'Roxie',
		local: 'Harvey',
		estado: 'Bom',
		data: '18/02/2022',
		obs: 'Teste',
	},
];

export default function DataTable() {
	return (
		<div style={{ height: 650, width: '100%' }}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={10}
				rowsPerPageOptions={[5]}
				components={{ Toolbar: GridToolbar }}
			/>
		</div>
	);
}
