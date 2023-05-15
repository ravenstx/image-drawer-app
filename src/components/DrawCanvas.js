import React, { useRef, useState, useEffect } from 'react';
import ColorBoard from './ColorBoard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const DrawCanvas = (props) => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const downloadRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(5);
  const [lineColor, setLineColor] = useState('black');
  const [lineOpacity, setLineOpacity] = useState(1); //0.1
  const [canvasWidth, setcanvasWidth] = useState(650);
  const [canvasHeight, setcanvasHeight] = useState(650);
  const [imageLoaded, setimageLoaded] = useState(0);
  const [history, setHistory] = useState([]);
  const [historyIndex, sethistoryIndex] = useState(-1);

  useEffect(() => {
    //Runs on every render
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (imageLoaded < 2) {
      console.log('image loads');
      const img = new Image();
      img.src = props.imageUrl;
      img.onload = () => {
        loadImage(ctx, img);
        setimageLoaded(imageLoaded + 1);
        updateHistory();
      };
    }
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.globalAlpha = lineOpacity;
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctxRef.current = ctx;
  });

  const loadImage = (ctx, img) => {
    let scalex = 1;
    let scaley = 1;
    if (img.height <= 650 && img.width <= 1080) {
      setcanvasWidth(img.width);
      setcanvasHeight(img.height);
    } else {
      scaley = 650 / img.height;
      scalex = scaley;
      let width = img.width * scalex;
      let height = img.height * scaley;
      if (width >= 1080) {
        scalex = 1080 / img.width;
        scaley = scalex;
        width = img.width * scalex;
        height = img.height * scaley;
      }
      setcanvasWidth(width);
      setcanvasHeight(height);
    }

    ctx.drawImage(img, 0, 0, img.width * scalex, img.height * scaley);
  };

  const startDrawing = (e) => {
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  }; // Function for ending the drawing
  const endDrawing = () => {
    ctxRef.current.closePath();
    setIsDrawing(false);
    if (historyIndex != history.length - 1) {
      setHistory(history.splice(historyIndex + 1));
    }
    updateHistory();
  };
  const draw = (e) => {
    if (!isDrawing) {
      return;
    }
    ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctxRef.current.stroke();
  };

  const updateHistory = (e) => {
    const fileType = props.fileName.split('.')[1];
    let canvasUrl = '';
    if (fileType === 'jpg' || fileType === 'jpeg') {
      canvasUrl = canvasRef.current.toDataURL(`image/jpeg`);
    } else {
      canvasUrl = canvasRef.current.toDataURL(`image/png`);
    }

    setHistory([...history, canvasUrl]);
    sethistoryIndex(historyIndex + 1);
  };

  const downloadCanvas = (e) => {
    const fileType = props.fileName.split('.')[1];
    let canvasUrl = '';
    if (fileType === 'jpg' || fileType === 'jpeg') {
      canvasUrl = canvasRef.current.toDataURL(`image/jpeg`);
    } else {
      canvasUrl = canvasRef.current.toDataURL(`image/png`);
    }
    let link = downloadRef.current;
    link.download = `edited${props.fileName}`;
    link.href = canvasUrl;
    link.click();
  };
  const changeCanvasSize = (e) => {
    console.log('scroll');
  };

  const goBackInHistory = () => {
    if (historyIndex - 1 > 0) {
      const img = new Image();
      img.src = history[historyIndex - 1];
      img.onload = () => {
        ctxRef.current.drawImage(img, 0, 0);
      };
      sethistoryIndex(historyIndex - 1);
    }
  };
  const goForwardInHistory = () => {
    if (historyIndex + 2 <= history.length) {
      const img = new Image();
      img.src = history[historyIndex + 1];
      img.onload = () => {
        ctxRef.current.drawImage(img, 0, 0);
      };
      sethistoryIndex(historyIndex + 1);
    }
  };

  return (
    <div className="edit-container">
      <div className="left">
        <ColorBoard lineColor={lineColor} setLineColor={setLineColor} />

        <div className="thickness-select">
          <input
            type="range"
            value={lineWidth}
            min="2"
            max="35"
            onChange={(e) => {
              setLineWidth(e.target.value);
            }}
          />
        </div>
        <div className="history-buttons">
          <button className="back-button" onClick={goBackInHistory}>
            <FontAwesomeIcon icon={faArrowLeftLong} color="#4db4d0" size="1x" />
          </button>
          <button className="forward-button" onClick={goForwardInHistory}>
            <FontAwesomeIcon
              icon={faArrowRightLong}
              color="#4db4d0"
              size="1x"
            />
          </button>
        </div>
        <button className="save-button" onClick={downloadCanvas}>
          Save
          <a ref={downloadRef} style={{ display: 'none' }}></a>
        </button>
      </div>

      <div className="right">
        <canvas
          className="canvas"
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseMove={draw}
          width={canvasWidth}
          height={canvasHeight}
          ref={canvasRef}
        ></canvas>
      </div>
    </div>
  );
};

export default DrawCanvas;
