import { ButtonBase } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-scroll";
import MinusLinear from "../assets/svg/minusLinear";
import PlusLinear from "../assets/svg/plusLinear";

const ImageEditor = () => {
  let libraryScriptRef = useRef(null);
  const [scriptFlag, setScriptFlag] = useState(false);
  const [selectedImage, setSelectedImage] = useState({
    image: "",
    saveChange: false,
  });

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
    <div className="cropper ">
      <div className="popup ">
        <div className="flex w-full mb-[46px] justify-between">
          <input
            type="file"
            className="file-input"
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
            className="file-button button-editor bg-[#0E0D0D10] text-[black]"
            value="Choose Image"
          />
          <input
            type="button"
            className="file-button button-editor bg-[#0E0D0D10] text-[black]"
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
                  <MinusLinear />
                  <input
                    type="range"
                    className="zoom-slider"
                    min="-19"
                    max="19"
                    value="-3/"
                  />
                  <PlusLinear />{" "}
                </div>
                <div className="w-full">
                  <p>Crop</p>

                  <select className="aspect-ratio button-editor border bg-[red]">
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
          )
        }

        <div className="container">
          <div className="flex justify-between w-full items-center">
            <input
              type="button"
              className="cancel-button button-editor border border-[#8390F5] "
              value="Cancel"
            />
            <input
              type="button"
              onClick={() =>
                setSelectedImage({
                  ...selectedImage,
                  saveChange: true,
                })
              }
              className="crop-button w-[200px] h-[56px] button-editor border-none  bg-[#8390F5]"
              value="Save Changes"
            />
          </div>
        </div>
        <div className="container"></div>
      </div>
    </div>
  );
};

export default ImageEditor;
