import { SecurityOutlined } from '@mui/icons-material';
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import Header from "../../components/Header";
import { mockDataTeam } from "../../data/mockData";
import { tokens } from '../../theme';

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns: GridColDef<{
        id: number;
        name: string;
        email: string;
        age: number;
        phone: string;
        access: string;
    }>[] = [
            { field: "id", headerName: "ID" },
            { field: "name", headerName: "Name", flex: 1, cellClassName: "name-colum--cell" },
            { field: "email", headerName: "Email", flex: 1 },
            { field: "age", headerName: "Age", type: "number", headerAlign: "center", align: "center" },
            { field: "phone", headerName: "Phone Number", flex: 1 },
            {
                field: "access", headerName: "Access Label", flex: 1,
                renderCell: ({ row: { access } }: GridCellParams) => {
                    return (
                        <Box
                            width="60%"
                            m="0 auto"
                            p="5px"
                            justifyContent="center"
                            display="flex"
                            borderRadius="4px"
                            sx={{
                                backgroundColor: `${access === "admin" ? colors.greenAccent[600] : colors.greenAccent[700]}`
                            }}
                        >
                            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                            {access === "manager" && <SecurityOutlined />}
                            {access === "user" && <LockOpenOutlinedIcon />}
                            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                                {access}
                            </Typography>
                        </Box>
                    )
                }
            },
        ];

    return (
        <Box
            m="20px"

        >
            <Header title="TEAM" subtitle='Managing the Team Members' />
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
                }}
            >
                <DataGrid
                    rows={mockDataTeam}
                    columns={columns}
                />

            </Box>
        </Box>
    )
}

export default Team;