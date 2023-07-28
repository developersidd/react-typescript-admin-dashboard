import { Box } from '@mui/material';
import Header from '../../components/Header';
import BarChart from './../../components/BarChart';
const Bar = () => {
  return (
    <Box m="20px"
    sx={{  color: "#000"}}
    >
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart isDashboard={false} />
      </Box>
    </Box>
  )
}

export default Bar
