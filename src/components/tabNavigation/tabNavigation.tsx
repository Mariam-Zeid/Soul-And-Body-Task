import { useState } from "react";
import tabs from "../../utils/tabMenu";
import styled from "styled-components";

const StyledTabNav = styled.div`
  direction: rtl;
`;
const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <StyledTabNav className="flex justify-between">
      {tabs.map((tab, indx) => (
        <button
          key={tab}
          className={`text-lg px-3 py-2 ${
            activeTab === indx
              ? "text-[#0b5cb9] border-b-2 border-[#0b5cb9]"
              : "text-[#00000099]"
          }`}
          onClick={() => setActiveTab(indx)}
        >
          {tab}
        </button>
      ))}
    </StyledTabNav>
  );
};

export default TabNavigation;
