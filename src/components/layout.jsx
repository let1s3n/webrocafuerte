// components/layout.js

import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      <main className="main-container position-relative">{children}</main>
      <Footer />
    </>
  )
}