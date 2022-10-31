import { useState } from "react";

const Count = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);

  return (
    <>
      <div className="count_wrap">
        <input
          type="radio"
          name="count_box"
          id="count_plus"
          checked={isActive}
          onClick={() => console.log(isActive)}
          onChange={() => console.log(isActive)}
        />
        <label htmlFor="count_plus">+</label>
        <input type="radio" name="count_box" id="count_minus" />
        <label htmlFor="count_minus">-</label>
        <input type="text" placeholder="0" />
      </div>
    </>
  );
};

export default Count;
