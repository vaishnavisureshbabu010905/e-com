import React from "react"
import "./Header.css"
import Head from "./Head"
import Search from "./Search"
import Navbar from "./Navbar"

const Header = ({ CartItem, searchQuery, setSearchQuery }) => {
  return (
    <>
      <Head />
      <Search CartItem={CartItem} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Navbar />
    </>
  )
}

export default Header
