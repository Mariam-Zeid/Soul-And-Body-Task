import styled from "styled-components";
import ClinicInfo from "../clinicInfo/clinicInfo";
import ContactInfo from "../contactInfo/contactInfo";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import TabNavigation from "../tabNavigation/tabNavigation";

const StyledLayout = styled.div`
  .content {
    box-shadow: -4px 17px 32px rgba(0, 0, 0, 0.06);
  }
  .forms {
    direction: rtl;
  }
`;
const Layout = () => {
  return (
    <StyledLayout className="flex flex-col gap-12">
      <Navbar />
      <div className="flex-1">
        <div className="flex gap-20 ml-10">
          <Sidebar />
          <div className="rounded-[80px] px-20 py-12 content w-[80%]">
            <h1 className="text-[20px] mb-10 font-medium text-center">
              ملف العياده : طب عام (الحي التامن)
            </h1>
            <TabNavigation />
            <div className="forms flex flex-col gap-16 items-start mt-8">
              <h2 className="text-[20px] font-[400]">بيانات العياده</h2>
              <ClinicInfo />
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </StyledLayout>
  );
};

export default Layout;
