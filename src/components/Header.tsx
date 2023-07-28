import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import useMediaQueryHook from "../hooks/useMediaQueryHook";

const Header = ({ title, subtitle }: { title: string, subtitle: string }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQueryHook(600);

    return (
        <Box mb={`${isMobile ? "15"  : "30"}px`}>
            <Typography
            textAlign={isMobile ? "center" : "left"}
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "0 0 5px 0" }}
            >
                {title}
            </Typography>
            <Typography variant="h5" color={colors.greenAccent[400]}>
                {subtitle}
            </Typography>
        </Box>
    );
};

export default Header;