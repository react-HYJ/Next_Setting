import React from "react";
// import Header from "../components/Header";
import Header from "../components/common/Header";
import AddressInput from "../components/functions/AddressInput";
import CountInput from "../components/functions/CountInput";
import Dragdrop from "../components/functions/Dragdrop";
import FileInput from "../components/functions/FileInput";

export default function Home() {
  return (
    <>
      <Header />
      <section className="container">
        <div className="e_gap">
          <h1 className="e_title">주소 입력</h1>
          <AddressInput />
        </div>
        <div className="e_gap">
          <h1 className="e_title">값 증감</h1>
          <CountInput />
        </div>
        <div className="e_gap">
          <h1 className="e_title">파일첨부 (기본)</h1>
          <FileInput />
        </div>
        <div className="e_gap">
          <h1 className="e_title">파일첨부 (drag & drop)</h1>
          <Dragdrop />
        </div>
      </section>
    </>
  );
}
