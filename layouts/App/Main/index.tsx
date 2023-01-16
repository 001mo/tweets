import { useContext } from "react";
import { Wrapper } from "components";
import { ThemeContext } from "contexts";
import { useWindowSize } from "hooks";


export default function App({ children }) {
    const { state: theme } = useContext(ThemeContext);
    const breakpoints = theme.breakpoints.values;
    const { width: scWidth } = useWindowSize();

    return (
        <Wrapper
            component="main"
            sx={{
                alignItems: {
                    xs: 'stretch',
                    sm3: 'flex-start'
                },
                flexGrow: {
                    xs: 1,
                    sm3: 2,
                    md: 1,
                },
                flexShrink: 1,
                width: (scWidth >= breakpoints.sm && scWidth < breakpoints.sm3) ? '100%' : undefined,
            }}>
            <Wrapper
                sx={{
                    flexGrow: 1,
                    flexShrink: 1,
                    width: {
                        xs: '100%',
                        sm3: 600,
                        md: 920,
                        md2: 990
                    },
                    height: 5000 // (d) remove height
                }}>
                <Wrapper sx={{
                    flexDirection: 'row',
                    flexGrow: 1,
                    justifyContent: 'space-between',
                    minHeight: '100%',
                }}>
                    {children}
                </Wrapper>
            </Wrapper>
        </Wrapper >
    )
}