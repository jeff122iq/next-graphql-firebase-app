import Header from "../components/Header";
import Footer from "../components/Footer";
import BottomElement from "../components/BottomElement";
import styled from "styled-components";

const Content = styled.div`
  width: 100%;
  min-height: 100vh;
`

export default function Page({children}) {
    return (
        <div>
            <Header/>
            <Content>
                {children}
            </Content>
            <BottomElement/>
            <Footer/>
        </div>
    );
};