import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
// import ImageUploader from './api/image_uploader';
// import ImageFileInput from './components/image_input/imageFileInput';

// const imageUploader = new ImageUploader();

// const FileInput = (props) => (<ImageFileInput {...props} imageUploader={imageUploader} />) 

ReactDOM.render(
  <React.StrictMode>
    <App></App>
    {/* <App FileInput={FileInput} /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

