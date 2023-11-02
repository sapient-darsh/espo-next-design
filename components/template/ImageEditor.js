import React, { useEffect, useRef, useState } from "react";

const ImageEditor = () => {
  let libraryScriptRef = useRef(null);
  const [scriptFlag, setScriptFlag] = useState(false);

  const loadLibraryScript = () => {
    if (!document.getElementById("imageCrop")?.id) {
      libraryScriptRef.current = document.createElement("script");
      libraryScriptRef.current.src = "/assets/imageCrop.js";
      libraryScriptRef.current.id = "imageCrop";
      document.body.appendChild(libraryScriptRef.current);
    }
  };

  useEffect(() => {
    if (scriptFlag) {
      setScriptFlag(false);
      loadLibraryScript();
    }
  }, [scriptFlag]);

  useEffect(() => {
    setScriptFlag(true);
  }, []);

  return (
    <div className="cropper">
      <div className="crop-result">
        <div className="image"></div>
        <div className="name"></div>
      </div>
      <input type="file" className="file-input" />
      <input
        type="button"
        className="file-button button-editor"
        value="Upload"
      />

      <div className="popup">
        <div className="image-box">
          <svg className="thumb-box">
            <rect width="300" height="100" />
          </svg>
          <div className="spinner">Loading...</div>
        </div>
        <div className="action">
          <div className="container">
            <i className="fas fa-search-minus"></i>
            <input
              type="range"
              className="zoom-slider"
              min="-19"
              max="19"
              value="-3/"
            />
            <i className="fas fa-search-minus"></i>
          </div>
          <div className="container">
            <select className="aspect-ratio button-editor">
              <option value="1/1">1/1</option>
              <option value="1/2">1/2</option>
              <option value="2/1">2/1</option>
              <option value="3/2">3/2</option>
              <option value="2/3">2/3</option>
              <option value="4/5">4/5</option>
              <option value="5/4">5/4</option>
              <option value="16/9">16/9</option>
              <option value="16/10">16/10</option>
              <option value="21/9">21/9</option>
            </select>
          </div>
          <div className="container">
            <input
              type="button"
              className="cancel-button button-editor warning"
              value="Cancel"
            />
            <input
              type="button"
              className="crop-button button-editor success"
              value="Crop"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
