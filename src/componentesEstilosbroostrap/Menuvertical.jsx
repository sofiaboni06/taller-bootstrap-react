import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import { FaHome, FaRegCreditCard, FaBootstrap } from "react-icons/fa"

function Menuvertical() {
  return (
    <div style={{ display: "flex" }}>
      
      {/* SIDEBAR */}
      <div
        style={{
          width: "80px",
          height: "100vh",
          backgroundColor: "#212529",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "20px",
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 1000,
        }}
      >

        {/* 🔥 TEXTO MENÚ (AGREGADO) */}
        <h5 style={{ color: "white", marginBottom: "20px" }}>
          Menú
        </h5>

        <Nav className="flex-column text-center">

          {/* ICONOS */}
          <Nav.Link as={NavLink} to="/" style={{ color: "white", margin: "15px 0" }}>
            <FaHome size={22} />
          </Nav.Link>

          <Nav.Link as={NavLink} to="/inicio-rb" style={{ color: "white", margin: "15px 0" }}>
            <FaBootstrap size={22} />
          </Nav.Link>

          <Nav.Link as={NavLink} to="/card" style={{ color: "white", margin: "15px 0" }}>
            <FaRegCreditCard size={22} />
          </Nav.Link>

          <Nav.Link as={NavLink} to="/card-rb" style={{ color: "white", margin: "15px 0" }}>
            <FaRegCreditCard size={22} />
          </Nav.Link>

        </Nav>
      </div>

    </div>
  )
}

export default Menuvertical