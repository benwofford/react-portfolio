import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Welcome!</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Resume</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

// import { Component } from "react";
// import { MenuItems } from "./Menuitems";
// import "./Navbar.css";

// class Navbar extends Component {
//   state = { clicked: false };

//   handleClick = () => this.setState({ clicked: !this.state.clicked });

//   render() {
//     return (
//       <nav className="NavbarItems">
//         <h1 className="navbar-logo">
//           Welcome!<i className="fab fa-react"></i>
//         </h1>
//         <div className="menu-icon" onClick={this.handleClick}>
//           <i
//             className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
//           ></i>
//         </div>
//         <ul className={this.state.clicked ? "nav-menu-active" : "nav-menu"}>
//           {MenuItems.map((item, index) => {
//             return (
//               <li key={index}>
//                 <a className={item.cName} href={item.url}>
//                   {item.title}
//                 </a>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>
//     );
//   }
// }

// export default Navbar;
