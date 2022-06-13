import React from "react"
import Header from "./header"
import Footer from "./footer"
import { GlobalStyle } from "./styles/Globalstyles"

const Layout = ({ children }) => {
  return (
    <>
    <GlobalStyle />
      <Header />
        <main>{children}</main>
    </>
  )
}

export default Layout
