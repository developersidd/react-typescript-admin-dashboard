import { Box, useTheme } from '@mui/material';
import Header from '../../components/Header';
import GeographyChart from './../../components/GeographyChart';
import { tokens } from '../../theme';
const Geography = () => {
  const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px"
    sx={{  color: "#000"}}
    >
      <Header title="Geography CHart" subtitle="Simple Geography Chart" />
      <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="2px">
        <GeographyChart isDashboard={false} />
      </Box>
    </Box>
  )
}

export default Geography
