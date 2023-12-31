import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import Header from "../../components/Header";
import { mockDataInvoices } from "../../data/mockData";
import { tokens } from '../../theme';

const Invoices = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns: GridColDef<{
        id: number;
        name: string;
        email: string;
        cost: string;
        phone: string;
        date: string;
    }>[] = [
            { field: "id", headerName: "ID" },
            { field: "name", headerName: "Name", flex: 1, cellClassName: "name-colum--cell" },
            { field: "email", headerName: "Email", flex: 1 },
            { field: "phone", headerName: "Phone Number ", flex: 1 },
            {
                field: "cost", headerName: "Cost", flex: 1,
                renderCell: ({ row: { cost } }: GridCellParams) => {
                    return (
                        <Typography color={colors.greenAccent[500]}>
                            {cost}
                        </Typography>
                    )
                },
            },
            { field: "date", headerName: "Date", flex: 1 },
        ];
    return (
        <Box
            m="20px"

        >
            <Header title="INVOICES" subtitle='List of Invoice Balances' />
            <Box
                m="40px 0 0 0 "
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none"
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none !important"
                    },
                    "& .name-colum--cell": {
                        color: colors.greenAccent[300]
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[500],
                        borderBottom: "none !important"
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`,
                    },
                }}
            >
                <DataGrid
                    rows={mockDataInvoices}
                    columns={columns}
                    checkboxSelection
                    
                />

            </Box>
        </Box>
    )
}

export default Invoices;
