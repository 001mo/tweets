import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { BarChartRounded } from "@mui/icons-material";
import AccordionItem from './AccordionItem';
import Accordion from "./Accordion";


export default function CreatorStudio() {

    return (
        <Accordion>
            <AccordionSummary>
                <Typography fontWeight={600}>Creator Studio</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: 0 }}>
                <AccordionItem href="https://analytics.twitter.com/about" IconComponent={BarChartRounded}>
                    Analytics
                </AccordionItem>
            </AccordionDetails>
        </Accordion>
    )
}
