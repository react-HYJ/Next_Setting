import { useState } from "react";

const FileImageInput = () => {
  const [showImages, setShowImages] = useState([]);

  const handleAddImages = (event) => {
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
      alert("최대 10개까지 첨부 가능합니다");
    }

    setShowImages(imageUrlLists);
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (index) => {
    setShowImages(showImages.filter((_, index) => index !== index));
  };

  return (
    <>
      <div className="img_input_wrap">
        <input type="file" id="uploader_img" onChange={handleAddImages} />
        <label htmlFor="uploader_img" className="uploader_img">
          파일첨부
        </label>
        <ul className="thumbnail_list">
          {showImages.map((item, index) => {
            return (
              <>
                <li
                  key={item.index}
                  style={{ backgroundImage: "url(" + item + ")" }}
                >
                  <button
                    type="button"
                    className="thumbnail_remove"
                    onClick={() => handleDeleteImage(index)}
                  >
                    X
                  </button>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default FileImageInput;
