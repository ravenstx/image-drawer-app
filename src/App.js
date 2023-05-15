import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import FileUploader from './components/FileUploader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import DrawCanvas from './components/DrawCanvas';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [fileName, setFileName] = useState(null);

  useEffect(() => {
    if (selectedImage && imageUrl == null) {
      setFileName(selectedImage.name);
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]); // mounts for the first time

  return (
    <div className="App">
      {imageUrl == null ? (
        <FileUploader onChange={(file) => setSelectedImage(file)} />
      ) : (
        <>
          <DrawCanvas imageUrl={imageUrl} fileName={fileName} />
        </>
      )}
    </div>
  );
}

export default App;
