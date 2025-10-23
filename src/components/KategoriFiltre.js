import React from 'react';

function KategoriFiltre({ kategori, setKategori, kategoriler }) {
  return (
    <div className="vintage-input-group">
      <label htmlFor="kategori" className="vintage-label">
        Kategori Seçin
      </label>
      <select
        id="kategori"
        className="vintage-input vintage-select"
        value={kategori}
        onChange={(e) => setKategori(e.target.value)}
      >
        {kategoriler.map(kat => (
          <option key={kat} value={kat}>
            {kat}
          </option>
        ))}
      </select>
    </div>
  );
}

export default KategoriFiltre;