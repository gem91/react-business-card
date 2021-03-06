import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_input/imageFileInput';

const authService = new AuthService();
const imageUploader = new ImageUploader();

const FileInput = (props) => (<ImageFileInput {...props} imageUploader={imageUploader} />) 

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById('root')
);

