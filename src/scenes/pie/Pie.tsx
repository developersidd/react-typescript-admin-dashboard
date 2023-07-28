import { Box } from '@mui/material';
import Header from '../../components/Header';
import PieChart from './../../components/PieChart';
const Pie = () => {
  return (
    <Box m="20px"
    sx={{  color: "#000"}}
    >
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart isDashboard={false} />
      </Box>
    </Box>
  )
}

export default Pie