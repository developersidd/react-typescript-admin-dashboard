import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, useTheme } from '@mui/material';
import Header from '../../components/Header';
import { tokens } from '../../theme';
const faqData = [
    {
        id: "LzMNec",
        title: "An Important Question About us",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        id: "8LL8vbKE",
        title: "How many services you provied?",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        id: "UGouhIqe",
        title: "Will you launch you App?",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        id: "y0NxocijgAyTd",
        title: "Most comon Question",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        id: "WLhfN0lHNPgzg3Xk",
        title: "When will Open our new Branch?",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
];
const Faq = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Question Page" />
            {
                faqData.map(({ details, title, id }) => {
                    return (
                        <div id={id} style={{marginTop: "8px"}}>

                            <Accordion
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMore />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography variant="h5" color={colors.greenAccent[400]}>{title} </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography
                                        color={colors.grey[100]}
                                    >
                                        {details}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    )
                })
            }

        </Box>
    )
}

export default Faq
