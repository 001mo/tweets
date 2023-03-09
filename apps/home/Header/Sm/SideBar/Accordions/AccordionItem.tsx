import { AccordionDetails, Button } from "@mui/material";

export default function AccordionItem({ children, href, IconComponent }) {
    return (
        <AccordionDetails sx={{ p: 0 }}>
            <Button
                variant="text"
                color="inherit"
                href={href}
                startIcon={<IconComponent fontWeight={400} />}
                fullWidth
                sx={{
                    justifyContent: 'flex-start',
                    borderRadius: 0,
                }}>
                { children }
            </Button>
        </AccordionDetails>
    )
}