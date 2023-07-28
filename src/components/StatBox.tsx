import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme'
import ProgressCircle from './ProgressCircle'
type StatBoxProps = {
  icon: React.ReactNode, title: string, subtitle: string, progress: string, increase: string
}
const StatBox = ({ icon, title, subtitle, progress, increase }: StatBoxProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  return (
    <Box width="100%" m="0 30px">
      <Box marginBottom="5px" display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography variant="h4" sx={{ color: colors.grey[100] }}>
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>

        <Typography variant="h5" sx={{ color: colors.greenAccent[600] }} fontStyle="italic">
          {increase}
        </Typography>
      </Box>
    </Box>
  )
}

export default StatBox
