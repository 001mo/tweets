import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { // icons
    SettingsOutlined,
    HelpOutlineRounded,
    DataUsageRounded,
    BrushOutlined,
    PianoOutlined,
    LogoutOutlined 
} from "@mui/icons-material";
import AccordionItem from './AccordionItem';
import Accordion from "./Accordion";


export default function SettingsAndSupport() {

    return (
        <Accordion>
            <AccordionSummary>
                <Typography fontWeight={600}>Settings and Support</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: 0 }}>
                <AccordionItem href="https://analytics.twitter.com/about" IconComponent={SettingsOutlined}>
                    Settings and Privacy
                </AccordionItem>
                <AccordionItem href="https://analytics.twitter.com/about" IconComponent={HelpOutlineRounded}>
                    Help Center
                </AccordionItem>
                <AccordionItem href="https://analytics.twitter.com/about" IconComponent={DataUsageRounded}>
                    Data Saver
                </AccordionItem>
                <AccordionItem href="https://analytics.twitter.com/about" IconComponent={BrushOutlined}>
                    Display
                </AccordionItem>
                <AccordionItem href="https://analytics.twitter.com/about" IconComponent={PianoOutlined}>
                    Keyboard Shortcuts
                </AccordionItem>
                <AccordionItem href="https://analytics.twitter.com/about" IconComponent={LogoutOutlined}>
                    Log out
                </AccordionItem>
            </AccordionDetails>
        </Accordion>
    )
}
