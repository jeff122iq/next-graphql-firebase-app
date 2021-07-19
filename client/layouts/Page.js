import Header from "../components/Header";
import Footer from "../components/Footer";
import BottomElement from "../components/BottomElement";
import styled from "styled-components";

export default function Page({ children }) {
  return (
    <div>
      <Header/>
      { children }
      <BottomElement/>
      <Footer/>
    </div>
  );
};