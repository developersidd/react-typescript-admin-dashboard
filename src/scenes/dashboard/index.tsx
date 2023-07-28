import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import TrafficIcon from "@mui/icons-material/Traffic";
import { Box, Button, Grid, IconButton, Typography, useTheme } from "@mui/material";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import ProgressCircle from "../../components/ProgressCircle";
import StatBox from "../../components/StatBox";
import { mockTransactions } from "../../data/mockData";
import { tokens } from "../../theme";
import useMediaQueryHook from './../../hooks/useMediaQueryHook';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQueryHook(600);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" flexDirection={isMobile ? "column" : "row"} mb="20px" justifyContent="space-between" alignItems="center">

        <Header title="DASHBOARD" subtitle="Welcome to your Dashboard 🙂" />
        <Button
          sx={{ background: colors.blueAccent[600], fontWeight: "bold" }}
          variant="contained"
          size="medium"
          startIcon={<DownloadOutlinedIcon />}
        >
          Download Report
        </Button>
      </Box>

      {/*  ROW 1 */}
      <Grid container spacing={2} columns={12} gridAutoRows={140}>
        <Grid item xs={12} sm={6} md={3}>
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>

          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Grid>
        {/* ROW 2  */}
        {/*  REVENUE GENERATED */}
        <Grid item xs={12} md={8}>
          <Box
            sx={{ backgroundColor: colors.primary[400] }}
          >
            <Box
              p="15px 30px"
            //display="flex "
            //justifyContent="space-between"
            //alignItems="center"
            >
              <Box>
                <Typography variant="h5" color={colors.grey[100]} marginBottom="5px">
                  Revenue Generated
                </Typography>
                <Typography variant="h3" color={colors.greenAccent[500]}>
                  $59,342.32
                </Typography>
              </Box>
              <Box>
                <IconButton>
                  <DownloadOutlinedIcon
                    sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                  />
                </IconButton>
              </Box>
            </Box>
            {/*  LINE CHART  */}
            <Box height="250px" m="-30px 0 0 0">
              <LineChart isDashboard={true} />
            </Box>
          </Box>
        </Grid>
        {/* RECENT TRANSACTIONS */}
        <Grid item xs={12} md={4}>
          <Box
            overflow="auto"
            height="345px"
          >
            <Box
              sx={{
                position: "sticky",
                top: "0",
                backgroundColor: colors.primary[400],
                colors: colors.grey[100],
                p: "15px",
                marginBottom: "5px"
              }}
            >
              <Typography variant="h5" color={colors.grey[100]} >
                Recent Transactions
              </Typography>
            </Box>
            {mockTransactions.map((transaction, i) => (
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={`${i === mockTransactions.length - 1 ? "" : "5px"}`}
                p="15px"
                sx={{ backgroundColor: colors.primary[400] }}
              >
                <Box>
                  <Typography
                    color={colors.greenAccent[500]}
                    variant="h5"
                    fontWeight="600"
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box color={colors.grey[100]}>{transaction.date}</Box>
                <Box
                  sx={{
                    backgroundColor: colors.greenAccent[500],
                    p: "5px 10px",
                    borderRadius: "4px"
                  }}
                >
                  ${transaction.cost}
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
        {/* ROW 3 */}

        {/*  */}
        <Grid item xs={12} md={4}
        >
          <Box

            sx={{
              backgroundColor: colors.primary[400]
            }}
            p="30px"
          >
            <Typography variant="h5" fontWeight="600">
              Campaign
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="25px"
            >
              <ProgressCircle size="125" />
              <Typography
                variant="h5"
                color={colors.greenAccent[500]}
                sx={{ mt: "15px" }}
              >
                $48,352 revenue generated
              </Typography>
              <Typography  variant="h6">Includes extra misc expenditures and costs</Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}


        >
          <Box
            p="4px"
            sx={{
              backgroundColor: colors.primary[400]
            }}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ padding: "30px 30px 0 30px" }}
            >
              Sales Quantity
            </Typography>
            <Box height="250px" mt="-20px">
              <BarChart isDashboard={true} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}
        >
          <Box
            p="30px"
            sx={{
              backgroundColor: colors.primary[400]
            }}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ marginBottom: "8px" }}
            >
              Geography Based Traffic
            </Typography>
            <Box color={colors.grey[700]} height="200px">
              <GeographyChart isDashboard={true} />
            </Box>
          </Box>
        </Grid>

      </Grid>
    </Box >
  )
}

export default Dashboard;