import { useState } from "react";

const FileInput = () => {
  const [upload, setUpload] = useState("");
  const getValue = (e: any) => {
    // case(1)
    //var txtArr = e.currentTarget.value.split("\\");
    //setUpload(txtArr[txtArr.length - 1]);
    var txt = e.target.files[0].name;
    setUpload(txt);
  };
  return (
    <>
      <div className="file_input_wrap">
        <input
          type="text"
          placeholder="파일을 첨부하세요"
          className="uploader_title"
          value={upload}
          onChange={() => setUpload(upload)}
        />
        <input type="file" id="uploader" onChange={getValue} />
        <label htmlFor="uploader">파일첨부</label>
      </div>
    </>
  );
};

export default FileInput;
