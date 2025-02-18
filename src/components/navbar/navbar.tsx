import styled from "styled-components";
import Logo from "./logo";
import NavMenu from "./navmenu";

const StyledNavbar = styled.nav`
  background-color: rgba(13, 93, 185, 1);
  box-shadow: 4px 17px 30px rgba(0, 0, 0, 0.06);
`;
const Navbar = () => {
  return (
    <StyledNavbar className="h-[126px] text-white flex justify-between items-center shadow-lg rounded-2xl">
      <Logo />
      <NavMenu />
    </StyledNavbar>
  );
};

export default Navbar;
