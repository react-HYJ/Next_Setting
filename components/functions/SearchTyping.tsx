import { useState } from "react";

interface Props {
  keyword: Array<any>;
}

const SearchTyping = (props: Props) => {
  const [word, setWord] = useState("");
  const [popup, setPopup] = useState(false);
  const [wordList, setWordList] = useState(props.keyword);

  return (
    <>
      <div className="search_typing_wrap">
        <input
          type="text"
          className="type_area"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          onFocus={() => setPopup(true)}
        />

        {popup && (
          <>
            <div className="dim" onClick={() => setPopup(false)}></div>
            <ul className="data_area">
              {wordList
                .filter((item) => {
                  if (word == "") {
                    return item;
                  } else if (item.toLowerCase().includes(word.toLowerCase())) {
                    return item;
                  }
                })
                .map((item, index) => {
                  return (
                    <>
                      <li
                        key={index}
                        onClick={() => {
                          setWord(item);
                          setPopup(false);
                        }}
                      >
                        {item}
                      </li>
                    </>
                  );
                })}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default SearchTyping;
