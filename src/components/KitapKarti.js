import React from 'react';

function KitapKarti({ kitap, favorideMi, toggleFavori }) {
  const { id, baslik, yazar, kategori } = kitap;

  return (
    <div className="vintage-book-card">
      <div className="book-header">
        <h3 className="book-title">{baslik}</h3>
        <button
          className={`book-favorite ${favorideMi ? 'active' : ''}`}
          onClick={() => toggleFavori(id)}
          aria-label={favorideMi ? 'Favorilerden çıkar' : 'Favorilere ekle'}
        >
          {favorideMi ? '★' : '☆'}
        </button>
      </div>
      <p className="book-author">{yazar}</p>
      <span className="book-category">{kategori}</span>
    </div>
  );
}

export default KitapKarti;