import React from "react";
// import Header from "../components/Header";
import Header from "../components/common/Header";
import Count from "../components/functions/Count";
import Dragdrop from "../components/functions/dragdrop";

export default function Home() {
  return (
    <>
      <Header />
      <section className="container">
        <div className="e_gap">
          <h1 className="e_title">주소 입력</h1>
        </div>
        <div className="e_gap">
          <h1 className="e_title">값 증감</h1>
          <Count />
        </div>
        <div className="e_gap">
          <h1 className="e_title">파일첨부 (기본)</h1>
          <Dragdrop />
        </div>
        <div className="e_gap">
          <h1 className="e_title">파일첨부 (drag & drop)</h1>
          <Dragdrop />
        </div>
      </section>
    </>
  );
}
