import { useState } from "react";

const SearchTyping = () => {
  const [word, setWord] = useState("");

  return (
    <>
      <div className="search_typing_wrap">
        <input
          type="text"
          className="type_area"
          value={word}
          onChange={(e) => {
            setWord(e.target.value);
            console.log(word);
          }}
        />
        <ul className="data_area">
          <li>Dachshudn</li>
          <li>Dalmatian</li>
          <li>Dandie Dinmont Terrier</li>
          <li>Danish Broholmer</li>
        </ul>
      </div>
    </>
  );
};

export default SearchTyping;
