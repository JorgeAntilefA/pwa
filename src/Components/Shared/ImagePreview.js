import React from "react";
import "./Styles/imagePreview.css";

export const ImagePreview = ({ dataUri, isFullscreen }) => {
  let classNameFullscreen = isFullscreen ? "demo-image-preview-fullscreen" : "";

  return (
    <div className={"demo-image-preview " + classNameFullscreen}>
      <img src={dataUri} />
    </div>
    // <div>
    //   {dataUri ? (
    //     <ImagePreview dataUri={dataUri} />
    //   ) : (
    //     <Camera onTakePhotoAnimationDone={handleTakePhotoAnimationDone} />
    //   )}
    // </div>
  );
};

export default ImagePreview;
