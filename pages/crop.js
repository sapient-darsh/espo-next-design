import MinusLinear from "@/components/assets/svg/minusLinear";
import PlusLinear from "@/components/assets/svg/plusLinear";
import React, { useState, useRef } from "react";

function Crop() {
  const [zoomValue, setZoomValue] = useState(100);
  const [cropValue, setCropValue] = useState(100);
  const [croppedImage, setCroppedImage] = useState(null);

  const imageStyle = {
    transform: `scale(${zoomValue / 100})`,
    transition: "transform 0.2s",
  };

  const cropCanvasRef = useRef(null);

  const cropimageStyle = {
    clipPath: `inset(0 ${100 - cropValue}% 0 ${100 - cropValue}%)`,
  };

  const handleCropChange = (event) => {
    const newCropValue = parseInt(event.target.value, 10);
    setCropValue(newCropValue);
  };

  const handleZoomChange = (event) => {
    const newZoomValue = parseInt(event.target.value, 10);
    setZoomValue(newZoomValue);
  };

  const handleZoomIn = () => {
    if (zoomValue < 200) {
      setZoomValue(zoomValue + 10);
    }
  };

  const handleZoomOut = () => {
    if (zoomValue > 100) {
      setZoomValue(zoomValue - 10);
    }
  };

  const handleShowResult = () => {
    const canvas = cropCanvasRef.current;

    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const originalImage = new Image();
      originalImage.src =
        "https://healcap-bucket.s3.ap-south-1.amazonaws.com/content/images/gallery/81710041263447758369.pexels-photo-262047.jpeg";
      originalImage.onload = () => {
        const cropPercentage = 100 - cropValue;

        // Calculate the crop dimensions maintaining the image's aspect ratio
        const cropWidth = (cropPercentage / 100) * originalImage.width;
        const cropHeight = (cropPercentage / 100) * originalImage.height;

        // Calculate the cropping position
        const x = (originalImage.width - cropWidth) / 2;
        const y = (originalImage.height - cropHeight) / 2;

        // Set the canvas dimensions based on the crop
        canvas.width = cropWidth;
        canvas.height = cropHeight;

        // Draw the cropped image
        ctx.drawImage(
          originalImage,
          x,
          y,
          cropWidth,
          cropHeight,
          0,
          0,
          canvas.width,
          canvas.height
        );

        const dataURL = canvas.toDataURL("image/png");
        setCroppedImage(dataURL);
      };
    }
  };

  return (
    <div className="p-60">
      <div className="w-[864px]">
        <div className="bg-black overflow-x-hidden overflow-y-hidden h-[352px] image-container">
          <img
            src="https://healcap-bucket.s3.ap-south-1.amazonaws.com/content/images/gallery/81710041263447758369.pexels-photo-262047.jpeg"
            alt=""
            className="w-[864px] h-[352px]"
            style={{ ...imageStyle, ...cropimageStyle }}
            width={864}
            height={352}
          />
        </div>
        <div className="mt-[51px] w-[640px]">
          <div className="mb-[48px]">
            <p className="text-[#0E0D0D] text-[12px] mb-[16px]">Zoom</p>
            <div className="flex gap-4 items-center mx-auto">
              <div onClick={handleZoomOut} className="cursor-pointer">
                <MinusLinear />
              </div>
              <div className="seekbar">
                <input
                  className="w-[560px]"
                  type="range"
                  min="100"
                  max="200"
                  value={zoomValue}
                  onChange={handleZoomChange}
                />
              </div>

              <div onClick={handleZoomIn} className="cursor-pointer">
                <PlusLinear />
              </div>
            </div>
          </div>

          <p className="text-[#0E0D0D] text-[12px] mb-[16px]">Fine Crop</p>
          <div className="cropseekbar flex gap-4">
            <div onClick={handleZoomOut} className="cursor-pointer">
              <MinusLinear />
            </div>
            <input
              className="w-[560px]"
              type="range"
              min="60"
              max="100"
              onChange={handleCropChange}
            />
            <div onClick={handleZoomIn} className="cursor-pointer">
              <PlusLinear />
            </div>
          </div>
          <div className="border border-black overflow-x-hidden w-[100%] scroll-none h-[352px] image-container">
            <canvas ref={cropCanvasRef} className="w-[100%] h-[100%]" />
          </div>
          <button onClick={handleShowResult}>Show Result Image</button>
          {croppedImage && (
            <div className="mt-4">
              <p>Result Image:</p>
              <img src={croppedImage} alt="Cropped Image" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Crop;
