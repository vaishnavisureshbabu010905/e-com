import React from "react"

const Head = () => {

  const logout = () => {
    localStorage.removeItem("user")
    window.location.href = "/login"
  }

  return (
    <div style={{display:"flex", justifyContent:"flex-end", padding:"10px"}}>
      <button onClick={logout}>
        Logout
      </button>
    </div>
  )
}

export default Head