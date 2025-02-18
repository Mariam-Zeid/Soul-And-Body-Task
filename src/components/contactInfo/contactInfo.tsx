import styled from "styled-components";

const StyledClinic = styled.div`
  label {
    color: rgba(0, 0, 0, 0.85);
    font-weight: 300;
    font-size: 16;
    margin-bottom: 8px;
    display: block;
  }

  input {
    border: 0.5px solid rgba(0, 0, 0, 0.5);
    outline: none;
    border-radius: 10px;
    text-align: center;
  }
`;

const ContactInfo = () => {
  return (
    <StyledClinic className="w-full grid grid-cols-3 gap-6">
      <div>
        <label>المعرف</label>
        <input className="w-full p-2" value="8" disabled />
      </div>
      <div>
        <label>كود الاختصار</label>
        <input className="w-full p-2" value="na" disabled />
      </div>
      <div>
        <label>اسم العيادة</label>
        <input className="w-full p-2" value="طب عام (الحي الثامن)" disabled />
      </div>
      <div>
        <label>شعار العيادة</label>
        <input className="w-full p-2" value="na" disabled />
      </div>
      <div>
        <label>صور النظم</label>
        <input className="w-full p-2" value="na" disabled />
      </div>
    </StyledClinic>
  );
};

export default ContactInfo;
