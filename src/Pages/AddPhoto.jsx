import React, { useState } from 'react';

function AddPhoto() {
  const [photoUrl, setPhotoUrl] = useState('');
  const [photos, setPhotos] = useState([]);

  const handleAddPhoto = () => {
    if (photoUrl) {
      setPhotos([...photos, { id: Date.now().toString(), url: photoUrl }]);
      setPhotoUrl('');
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Ajout de Photo via URL</h1>
      </div>

      <div className="content">
        <div className="input-container">
          <input
            type="text"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
            placeholder="URL de la photo"
            className="input"
          />
          <button onClick={handleAddPhoto} className="button add-button">
            Ajouter la photo
          </button>
        </div>

        <div className="photos">
          {photos.map((photo) => (
            <div key={photo.id} className="photo-item">
              <img src={photo.url} alt="Photo" className="photo-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AddPhoto;
