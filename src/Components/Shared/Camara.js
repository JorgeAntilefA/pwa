import React, { useState } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

import ImagePreview from "./ImagePreview";

function App({ setUri, uri }) {
  const [dataUri, setDataUri] = useState("");
  function handleTakePhoto(dataUri) {
    // Do stuff with the photo...
    console.log("takePhoto");
  }
  function handleTakePhotoAnimationDone(dataUri) {
    setUri(dataUri);
  }

  return (
    // <Camera
    //   onTakePhoto={(dataUri) => {
    //     handleTakePhoto(dataUri);
    //   }}
    // />
    <div>
      {dataUri ? (
        <ImagePreview dataUri={dataUri} />
      ) : (
        <Camera
          onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
          isFullscreen={true}
        />
      )}
    </div>
  );
}

export default App;
