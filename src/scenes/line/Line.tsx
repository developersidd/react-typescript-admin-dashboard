import { Box } from '@mui/material';
import Header from '../../components/Header';
import LineChart from './../../components/LineChart';

const Line = () => {
  return (
    <Box m="20px"
    sx={{  color: "#000"}}
    >
      <Header title="Line CHart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart isDashboard={false} />
      </Box>
    </Box>
  )
}

export default Line
