import styled from "styled-components";
import menu from "../../utils/navMenu";
import { useState } from "react";

const StyledMenu = styled.div`
  .nav-item {
    overflow: hidden;
    .nav-link {
      z-index: 99;
      transition: all 0.3s ease-in-out;
    }

    &::before {
      content: "";
      position: absolute;
      top: -100%;
      left: 0;
      width: 100%;
      height: 5px;
      z-index: 1;
      background-color: #fff;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      transition: all 0.3s ease-in-out;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 0%;
      height: 100%;
      z-index: 1;
      background: linear-gradient(180deg, #0b5cb9, #ffffff);
      transition: all 0.3s ease-in-out;
    }
  }

  .active {
    background-color: rgba(249, 249, 249, 0.08);
    /* .nav-link--icon,
    .nav-link--title {
      color: rgba(249, 249, 249, 0.75);
    } */

    &::before {
      top: 0;
    }
  }
`;

const NavMenu = () => {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <StyledMenu className="flex-1  h-full">
      <ul className="nav-items flex justify-center h-full">
        {menu.map(({ id, title, icon: Icon }, indx) => (
          <li
            key={id}
            onClick={() => setActiveLink(indx)}
            className={`nav-item relative cursor-pointer block px-8 ${
              activeLink === indx ? "active" : ""
            }`}
          >
            <div className="nav-link relative z-[999] pt-8 font-medium flex flex-col justify-center items-center gap-3">
              <span className="nav-link--title text-[18px]">{title}</span>
              <Icon size={28} className="nav-link--icon" />
            </div>
          </li>
        ))}
      </ul>
    </StyledMenu>
  );
};

export default NavMenu;
