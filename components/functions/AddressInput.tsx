import { useState } from "react";
import PostCode from "./PostCode";

const AddressInput = () => {
  const [enroll_company, setEnroll_company] = useState({
    address: "",
    zoncode: "",
  });

  const [popup, setPopup] = useState(false);

  const handleInput = (e) => {
    setEnroll_company({
      ...enroll_company,
      [e.target.name]: e.target.value,
    });
  };

  const handleComplete = (data) => {
    setPopup(!popup);
  };

  return (
    <>
      <div className="address_input_wrap">
        <input
          type="text"
          placeholder="우편번호"
          required={true}
          onChange={handleInput}
          onClick={handleComplete}
          value={enroll_company.zoncode}
        />
        <input
          type="text"
          placeholder="기본주소"
          required={true}
          onChange={handleInput}
          value={enroll_company.address}
        />
        <input type="text" placeholder="상세주소" />
      </div>
      {popup && (
        <PostCode
          company={enroll_company}
          setcompany={setEnroll_company}
        ></PostCode>
      )}
    </>
  );
};
export default AddressInput;
