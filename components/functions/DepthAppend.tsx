import {
  DetailedHTMLProps,
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
  useState,
} from "react";

interface Props {
  depth?: Number | 1 | 2 | 3;
}

const DepthAppend = (props: Props) => {
  //뎁스 data
  const [depth1Data, setDepth1Data] = useState([
    "카테고리1-1",
    "카테고리2-1",
    "카테고리3-1",
  ]);
  const [depth2Data, setDepth2Data] = useState([
    ["카테고리1-2-1", "카테고리1-2-2"],
    "카테고리2-2",
    "카테고리3-2",
  ]);
  const [depth3Data, setDepth3Data] = useState([
    "카테고리1-3",
    "카테고리2-3",
    "카테고리3-3",
  ]);
  // 뎁스 show/hide
  const [openDepth2, setpenDepth2] = useState(false);
  const [openDepth3, setpenDepth3] = useState(false);

  // 카테고리 수정입력폼 show/hide
  const [changeToEdit, setChangeToEdit] = useState(false);
  // 카테고리 수정입력폼 > input value state
  const [text, setText] = useState("");

  // 카테고리 수정입력폼 > 삭제 버튼 클릭시
  const handleDeleteDepth = (index) => {
    setDepthData(depthData.filter((_, index) => index !== index));
  };

  // 카테고리 추가하기
  const handleAddCategory = (e: any) => {
    const newDepthData = [...depthData];
    newDepthData.push(e.target.value);
    setDepthData(newDepthData);
  };

  return (
    <>
      <div className="depth_append_wrap">
        <ul className="depth1">
          {depth1Data.map((item, index) => {
            return (
              <>
                <li key={index}>
                  <div className="depth_top">
                    <DepthBtn state={openDepth2} setState={setpenDepth2} />
                    {changeToEdit ? (
                      <DepthEdit
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onSave={() => handleAddCategory}
                        onDelete={() => handleDeleteDepth(index)}
                      />
                    ) : (
                      <DepthFix
                        depthName={item}
                        onClickAdd={() => {
                          setpenDepth2(true);
                        }}
                        onClickEdit={() => setChangeToEdit(true)}
                        onClickDelete={() => handleDeleteDepth(index)}
                      />
                    )}
                  </div>

                  {/****************************** depth2 ******************************/}
                  {openDepth2 && (
                    <>
                      {/*
                      <ul className="depth2">
                        {depth2Data.map((item, index) => {
                          return (
                            <>
                              <li>
                                <div className="depth_top">
                                  <DepthBtn
                                    state={openDepth3}
                                    setState={setpenDepth3}
                                  />
                                  {item ? (
                                    <DepthFix depthName={item} />
                                  ) : (
                                    <DepthEdit
                                      value={text}
                                      onChange={(e) => setText(e.target.value)}
                                      onSave={() => setChangeToEdit(false)}
                                      onDelete={() => handleDeleteDepth(1)}
                                    />
                                  )}
                                </div>

                                {openDepth3 && (
                                  <>
                                    <ul className="depth3">
                                      <li>
                                        <div className="depth_top">
                                          {item.depth3 ? (
                                            <>
                                              <p>-</p>
                                              <DepthFix
                                                depthName={item.depth3}
                                                lastDepth
                                              />
                                            </>
                                          ) : (
                                            <>
                                              <p className="depth_name">-</p>
                                              <DepthEdit
                                                value={text}
                                                onChange={(e) =>
                                                  setText(e.target.value)
                                                }
                                                onSave={() =>
                                                  setChangeToEdit(false)
                                                }
                                                onDelete={() =>
                                                  handleDeleteDepth(1)
                                                }
                                              />
                                            </>
                                          )}
                                        </div>
                                      </li>
                                    </ul>
                                  </>
                                )}
                              </li>
                            </>
                          );
                        })}{" "}
                      </ul>*/}
                    </>
                  )}
                </li>
              </>
            );
          })}

          {/* <li>
            <div className="depth_top">
              <DepthBtn state={openDepth2} setState={setpenDepth2} />
            </div>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default DepthAppend;

// 뎁스 유닛 toggle button component
interface ToggleProps {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}
const DepthBtn = (props: ToggleProps) => {
  return (
    <>
      <button
        type="button"
        className="btn_toggle"
        onClick={() => props.setState(!props.state)}
      >
        <img
          src={`/img/icon/depth_${props.state ? "minus" : "plus"}.svg`}
          alt=""
        />
      </button>
    </>
  );
};

// 뎁스 유닛 component
interface FixProps {
  onClickAdd?: () => void;
  onClickEdit?: () => void;
  onClickDelete?: () => void;
  depthName?: string;
  lastDepth?: boolean;
}
const DepthFix = (props: FixProps) => {
  const [setting, setSetting] = useState(false);
  return (
    <>
      <p className="depth_name">{props.depthName}</p>
      <div className="btn_setting_wrap">
        <button
          type="button"
          className="btn_setting"
          onClick={() => {
            setSetting(!setting);
          }}
        >
          <img src="/img/icon/depth_setting.svg" alt="" />
        </button>
        {setting && (
          <>
            <ul className="btn_setting_options">
              {!props.lastDepth && (
                <li onClick={() => props.onClickAdd()}>
                  <img src="/img/icon/depth_setting_add.svg" alt="" />
                  카테고리 추가
                </li>
              )}

              <li onClick={() => props.onClickEdit()}>
                <img src="/img/icon/depth_setting_edit.svg" alt="" />
                수정
              </li>
              <li onClick={() => props.onClickDelete()}>
                <img src="/img/icon/depth_setting_delete.svg" alt="" />
                삭제
              </li>
            </ul>
          </>
        )}
      </div>
    </>
  );
};

// 카테고리 수정입력폼 component
interface EditProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value: string;
  onSave?: () => void;
  onDelete?: () => void;
}
const DepthEdit = (props: EditProps) => {
  return (
    <>
      <div className="editable_box">
        <input
          type="text"
          placeholder="뎁스 카테고리명"
          value={props.value}
          onChange={props.onChange}
        />
        <button type="button" className="btn_edit_save" onClick={props.onSave}>
          저장
        </button>
        <button
          type="button"
          className="btn_edit_delete"
          onClick={props.onDelete}
        >
          <img src="/img/icon/depth_setting_delete2.svg" alt="" />
        </button>
      </div>
    </>
  );
};
