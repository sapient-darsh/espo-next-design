import React, { useEffect, useRef, useState } from "react";
import MinusLinear from "../assets/svg/minusLinear";
import PlusLinear from "../assets/svg/plusLinear";
import Button from "../ui/button";

class Popup {
  constructor(settings) {
    this.className = settings.className ? settings.className : "";
    this.containerClasses = settings.containerClasses
      ? settings.containerClasses
      : "";
    this.onOpen =
      settings.onOpen && typeof settings.onOpen === "function"
        ? settings.onOpen
        : null;
    this.onClose =
      settings.onClose && typeof settings.onClose === "function"
        ? settings.onClose
        : null;

    this.popup = null;
  }

  open() {
    this.popup.classList.add("active");
    if (this.onOpen) this.onOpen();
  }

  close() {
    this.popup.classList.remove("active");
    if (this.onClose) this.onClose();
  }
}

const ImageEditor = () => {
  let libraryScriptRef = useRef(null);
  const [scriptFlag, setScriptFlag] = useState(false);
  const [selectedImage, setSelectedImage] = useState({
    image: "",
    saveChange: false,
  });
  const [zoomLevel, setZoomLevel] = useState(0);

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

  // Rest of your state variables
  const popupRef = useRef(null);

  return (
    <div className="cropper font-slussen">
      <div
        ref={popupRef}
        className="popup flex justify-center items-center flex-col p-12 bg-white w-full max-w-[864px] border"
      >
        <div className="flex w-full mb-[46px] justify-between">
          <input
            type="file"
            className="file-input hidden"
            onChange={(e) =>
              setSelectedImage({
                ...selectedImage,
                image: URL.createObjectURL(e.target.files[0]),
                saveChange: false,
              })
            }
          />
          <input
            type="button"
            className="file-button p-[10px] rounded-md bg-[#0E0D0D10] text-dark font-bold"
            value="Choose Image"
          />
          <input
            type="button"
            className="file-button p-[10px] rounded-md bg-[#0E0D0D10] text-dark font-bold"
            value="Delete"
          />
        </div>
        {selectedImage?.saveChange ? (
          <div className="crop-result">
            <div className="image"></div>
            <div className="name"></div>
          </div>
        ) : (
          <>
            <div className="image-box bg-black mb-[48px]">
              <svg className="thumb-box">
                <rect width="300" height="100" />
              </svg>
              <div className="spinner">Loading...</div>
            </div>
            <div className="action w-[560px]  ">
              <p>Zoom</p>
              <div className="container  flex flex-row items-center">
                <div
                  className="cursor-pointer"
                  onClick={() => setZoomLevel((prevZoom) => prevZoom * 0.9)}
                >
                  <MinusLinear />
                </div>
                <input
                  type="range"
                  className="zoom-slider"
                  min="-20"
                  max="20"
                  value={zoomLevel}
                  onChange={() => {
                    cropper.zoom(zoomLevel);
                  }}
                />
                <div
                  className="cursor-pointer"
                  onClick={() => setZoomLevel((prevZoom) => prevZoom * 1.1)}
                >
                  <PlusLinear />
                </div>
              </div>
              <div className="w-full">
                <p>Crop</p>

                <select className="aspect-ratio outline-none w-1/2 p-[10px] rounded-md appearance-none bg-[#0E0D0D10]">
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
            </div>
          </>
        )}

        <div className="container mt-4 ">
          <div className="flex justify-between w-full items-center">
            <Button
              className="cancel-button"
              type="button"
              variant="outlined"
              size="small"
            >
              Cancel
            </Button>
            <Button
              className="crop-button"
              onClick={() =>
                setSelectedImage({
                  ...selectedImage,
                  saveChange: true,
                })
              }
              type="button"
              variant="contained"
              size="small"
            >
              Save Changes
            </Button>
          </div>
        </div>
        <div className="container"></div>
      </div>
    </div>
  );
};

export default ImageEditor;
