import Layout from 'layouts/App';
import Layers from 'layouts/App/Layers';
import BottomBarWrapper from 'layouts/App/Layers/BottomBarWrapper';
import HeaderWrapper from 'layouts/App/Layers/HeaderWrapper';
import Header from 'layouts/App/Header';
import Main from 'layouts/App/Main';
import MainContent from 'layouts/App/Main/Content';
import MainSidebarWrapper from 'layouts/App/Main/SideBar';
import MainWrapper from 'layouts/App/MainWrapper';
import MainSidebar from 'apps/home/MainSidebar';
import InnerHeader from 'apps/home/Header/Lg';
import SmHeader from 'apps/home/Header/Sm';
import BottomBar from 'apps/home/BottomBar';


export default function App() {
    return (
        <Layout>
            <Layers>
                <HeaderWrapper>
                    <SmHeader />
                </HeaderWrapper>
                <BottomBarWrapper>
                    <BottomBar />
                </BottomBarWrapper>
            </Layers>

            <MainWrapper>
                <Header>
                    <InnerHeader />
                </Header>

                <Main>
                    <MainContent>

                    </MainContent>
                    <MainSidebarWrapper>
                        <MainSidebar />
                    </MainSidebarWrapper>
                </Main>
            </MainWrapper>
        </Layout>
    )
}