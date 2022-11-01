import { useState } from "react";

const CountInput = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isNumber, setIsNumber] = useState("");

  const onlyNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    const removedCommaValue: number = Number(
      // value의 값이 숫자가 아닐경우 빈문자열로 replace 하고, 숫자 3단위마다 콤마를 추가해줌
      value.replace(/[^0-9]/g, "").replaceAll(",", "")
    );
    setIsNumber(removedCommaValue.toLocaleString());
  };

  return (
    <>
      <div className="count_input_wrap">
        <input
          type="checkbox"
          name="count_box"
          id="count_plus"
          checked={isActive}
          onClick={() => {
            setIsActive(!isActive);
            setIsActive2(false);
          }}
          readOnly
        />
        <label htmlFor="count_plus">+</label>
        <input
          type="checkbox"
          name="count_box"
          id="count_minus"
          checked={isActive2}
          onClick={() => {
            setIsActive2(!isActive2);
            setIsActive(false);
          }}
          readOnly
        />
        <label htmlFor="count_minus">-</label>
        <input
          type="text"
          placeholder="0"
          value={isNumber}
          onChange={onlyNumber}
        />
      </div>
    </>
  );
};

export default CountInput;
