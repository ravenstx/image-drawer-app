import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';

const FileUploader = (props) => {
  return (
    <div className="file-container">
      <label className="custom-file-upload" htmlFor="file-upload">
        <FontAwesomeIcon
          icon={faArrowUpFromBracket}
          color="#4db4d0"
          size="4x"
        />
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => props.onChange(e.target.files[0])}
        />
      </label>
    </div>
  );
};

export default FileUploader;
