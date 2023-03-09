import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { RocketLaunchRounded, LocalAtmRounded, AddToHomeScreenRounded } from "@mui/icons-material";
import AccordionItem from './AccordionItem';
import Accordion from "./Accordion";


export default function SettingsAndSupport() {

    return (
        <Accordion>
            <AccordionSummary>
                <Typography fontWeight={600}>Settings and Support</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: 0 }}>
                <AccordionItem href="https://analytics.twitter.com/about" IconComponent={RocketLaunchRounded}>
                    Twitter for Professionals
                </AccordionItem>
                <AccordionItem href="https://analytics.twitter.com/about" IconComponent={LocalAtmRounded}>
                    Twitter Ads
                </AccordionItem>
                <AccordionItem href="https://analytics.twitter.com/about" IconComponent={AddToHomeScreenRounded}>
                    Monetization
                </AccordionItem>
            </AccordionDetails>
        </Accordion>
    )
}
