import { Box, useTheme } from '@mui/material';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import Header from "../../components/Header";
import { mockDataContacts } from "../../data/mockData";
import { tokens } from '../../theme';

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns: GridColDef<{
        id: number;
        name: string;
        email: string;
        age: number;
        phone: string;
        address: string;
        city: string;
        zipCode: string;
        registrarId: number;
    }>[] = [
            { field: "id", headerName: "ID", flex: 0.5 },
            { field: "registrarId", headerName: "Register ID" },
            { field: "name", headerName: "Name", flex: 1, cellClassName: "name-colum--cell" },
            { field: "age", headerName: "Age", type: "number", headerAlign: "center", align: "center" },
            { field: "email", headerName: "Email", flex: 1 },
            { field: "address", headerName: "Address" },
            { field: "city", headerName: "city" },
            { field: "zipCode", headerName: "ZipCode" },
            { field: "phone", headerName: "Phone Number ", flex: 1 },
        ];
    return (
        <Box
            m="20px"

        >
            <Header title="CONTACTS" subtitle='List of contacts for Future Reference' />
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
                    rows={mockDataContacts}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />

            </Box>
        </Box>
    )
}

export default Contacts;