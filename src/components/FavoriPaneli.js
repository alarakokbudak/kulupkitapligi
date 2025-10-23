import React from 'react';

function FavoriPaneli({ favoriKitaplar }) {
  return (
    <div className="favorites-panel">
      <div className="section-header">Favori Kitaplarım</div>
      <div className="favorites-count">
        {favoriKitaplar.length} kitap
      </div>
      <div className="favorites-list">
        {favoriKitaplar.length === 0 ? (
          <div className="no-favorites">
            Henüz favori kitap eklemediniz
          </div>
        ) : (
          favoriKitaplar.map(kitap => (
            <div key={kitap.id} className="favorite-item">
              <div className="favorite-title">{kitap.baslik}</div>
              <div className="favorite-author">{kitap.yazar}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default FavoriPaneli;