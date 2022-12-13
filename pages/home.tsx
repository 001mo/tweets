import { useRef } from 'react';
import Layout from 'layouts/App';
import Header from 'layouts/App/Header';
import HeaderBar from 'layouts/App/Layers/HeaderBar';
import Layers from 'layouts/App/Layers'; // (d) make pathes like Dropdown e.g <Dropdown.Header>
import Main from 'layouts/App/Main';
import MainWrapper from 'layouts/App/MainWrapper';
import BottomBar from 'layouts/App/Layers/BottomBar';

export default function App() {
    const headerHeight = useRef(50);

    return (
        <Layout>
            <Layers>
                <HeaderBar>
                    <div
                    style={{
                        backgroundColor: '#000', // (d) del bg
                        width: '100%',
                        height: headerHeight.current + 'px'
                    }}>

                    </div>
                </HeaderBar>
                <BottomBar>
                    <div
                    style={{
                        backgroundColor: '#000', // (d) del bg
                        width: '100%',
                        height: headerHeight.current + 'px'
                    }}>
                        
                    </div>
                </BottomBar>
            </Layers>
            <MainWrapper>
                <Header height={headerHeight.current}>
                    
                </Header>
                <Main>

                </Main>
            </MainWrapper>
        </Layout>
    )
}