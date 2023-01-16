import { Wrapper } from "components";

export default function MainWrapper({ children }) {
    return (
        <Wrapper sx={{ flexDirection: { sm: 'row' }, height: '100%' }}>
            {children}
        </Wrapper>
    )
}