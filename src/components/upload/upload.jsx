import React, { useCallback, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './upload.scss';

const FileUpload = () => {
  const fileInputRef = useRef(null);

  const handleFileChange = async () => {
    const selectedFile = fileInputRef.current.files[0];

    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        const response = await axios.post('YOUR_SERVER_ENDPOINT', formData);
        console.log('File uploaded successfully:', response.data);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  const handleUploadButtonClick = () => {
    // 触发文件选择
    fileInputRef.current.click();
  };

  return (
    <div>
      <div className='dropzone' onClick={handleUploadButtonClick}>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <p>Click to select an image</p>
      </div>

      <div>
        <Link to="/result">
          <button>Start Matching</button>
        </Link>
      </div>
    </div>
  );
};

export default FileUpload;
