import {
  DarkModeOutlined,
  LightModeOutlined,
  NotificationsOutlined,
  PersonOutline, Search,
  SettingsOutlined
} from "@mui/icons-material";
import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { tokens, useColorModeContext } from '../../theme';
const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { colorMode: { toggleColorMode } } = useColorModeContext() || {};

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/*  SEARCH BAR  */}
      <Box display="flex" sx={{ backgroundColor: colors.primary[400] }} borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search' />
        <IconButton type="button" sx={{ p: 1 }} >
          <Search />
        </IconButton>
      </Box>
      {/* Icons */}
      <Box display="flex">
        <IconButton onClick={toggleColorMode} type="button" sx={{}} >
          {
            theme.palette.mode === "dark" ? (<LightModeOutlined />) : (<DarkModeOutlined />)
          }
        </IconButton>
        <IconButton type="button" sx={{}} >
          <NotificationsOutlined />
        </IconButton>
        <IconButton type="button" sx={{}} >
          <SettingsOutlined />
        </IconButton>
        <IconButton type="button" sx={{}} >
          <PersonOutline />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Topbar
