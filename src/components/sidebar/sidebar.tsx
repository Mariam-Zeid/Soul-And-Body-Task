import { CiBellOn, CiGlobe, CiUser } from "react-icons/ci";
import { HiBars3 } from "react-icons/hi2";
import styled from "styled-components";

const StyledSidebar = styled.div`
  .icon {
    box-shadow: 0px 8px 30px rgba(11, 92, 185, 0.12);
  }
`;
const Sidebar = () => {
  return (
    <StyledSidebar className=" w-16 flex flex-col items-center gap-8">
      <div className="icon text-gray-500 text-2xl cursor-pointer hover:text-blue-500 w-[48px] h-[48px] rounded-full flex justify-center items-center">
        <CiUser />
      </div>
      <div className="icon text-gray-500 text-2xl cursor-pointer hover:text-blue-500 w-[48px] h-[48px] rounded-full flex justify-center items-center">
        <CiBellOn />
      </div>
      <div className="icon text-gray-500 text-2xl cursor-pointer hover:text-blue-500 w-[48px] h-[48px] rounded-full flex justify-center items-center">
        <CiGlobe />
      </div>
      <div className="icon text-gray-500 text-2xl cursor-pointer hover:text-blue-500 w-[48px] h-[48px] rounded-full flex justify-center items-center">
        <HiBars3 />
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
