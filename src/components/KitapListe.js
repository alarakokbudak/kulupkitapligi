import React from 'react';
import KitapKarti from './KitapKarti';

function KitapListe({ kitaplar, favoriler, toggleFavori }) {
  if (kitaplar.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">📚</div>
        <div className="empty-state-text">
          Aradığınız kriterlere uygun kitap bulunamadı.
        </div>
      </div>
    );
  }

  return (
    <div className="books-grid">
      {kitaplar.map(kitap => (
        <KitapKarti
          key={kitap.id}
          kitap={kitap}
          favorideMi={favoriler.includes(kitap.id)}
          toggleFavori={toggleFavori}
        />
      ))}
    </div>
  );
}

export default KitapListe;