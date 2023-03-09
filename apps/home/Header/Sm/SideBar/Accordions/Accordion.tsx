import { useState } from "react";
import { Accordion as MuiAccordion, AccordionProps } from "@mui/material";


export default function Accordion(props: AccordionProps) {
    const { children } = props;
    const [expanded, setExpanded] = useState(false);

    return (
        <MuiAccordion
            expanded={expanded}
            onChange={() => setExpanded(!expanded)}
            square
            disableGutters
            elevation={0}
            sx={{
                '&': {
                    bgcolor: 'transparent',
                },
                '& .MuiAccordionSummary-root': {
                    p: 8,
                },
                '& .MuiAccordionSummary-content': {
                    m: 0,
                },
                '& .MuiButton-root': {
                    p: 6
                }
            }}>
            { children }
        </MuiAccordion>
    )
}