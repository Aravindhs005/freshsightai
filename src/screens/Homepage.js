import React, { useState } from 'react';
import './styles/homepage.css';

export const Homepage = () => {
  const [image, setImage] = useState(null);

  const handleCameraCapture = (event) => {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="homepage">
      <h1>Welcome to Fresh.Sight.AI 🍎</h1>
      <p>Capture or upload an image of a fruit to analyze its ripeness!</p>

      <div className="upload-container">
        <input
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleCameraCapture}
          className="upload-input"
        />
      </div>

      {image && (
        <div className="image-preview">
          <h2>Image Preview:</h2>
          <img src={image} alt="Captured Fruit" className="preview-image" />
        </div>
      )}
    </div>
  );
};

export default Homepage;
