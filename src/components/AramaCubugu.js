import React from 'react';

function AramaCubugu({ aramaMetni, setAramaMetni }) {
  return (
    <div className="vintage-input-group">
      <label htmlFor="arama" className="vintage-label">
        Kitap Ara
      </label>
      <input
        id="arama"
        type="text"
        className="vintage-input"
        placeholder="Kitap adı yazın..."
        value={aramaMetni}
        onChange={(e) => setAramaMetni(e.target.value)}
      />
    </div>
  );
}

export default AramaCubugu;