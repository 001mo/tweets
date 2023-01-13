import { useRef } from 'react';
import Layout from 'layouts/App';
import Header from 'layouts/App/Header';
import HeaderBar from 'layouts/App/Layers/HeaderBar';
import Layers from 'layouts/App/Layers'; // (d) make pathes like Dropdown e.g <Dropdown.Header>
import Main from 'layouts/App/Main';
import MainContent from 'layouts/App/Main/Content';
import MainSideBar from 'layouts/App/Main/SideBar';
import MainWrapper from 'layouts/App/MainWrapper';
import BottomBar from 'layouts/App/Layers/BottomBar';
import HomeMainSidebar from 'apps/home/MainSidebar'
import HeaderContent from 'apps/home/Header';


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
                <Header>
                    <HeaderContent />
                </Header>
                <Main>
                    <MainContent>

                    </MainContent>
                    <MainSideBar>
                        <HomeMainSidebar/>
                    </MainSideBar>
                </Main>
            </MainWrapper>
        </Layout>
    )
}