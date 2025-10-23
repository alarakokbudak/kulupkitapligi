import React, { useState, useEffect } from 'react';
import AramaCubugu from './components/AramaCubugu';
import KategoriFiltre from './components/KategoriFiltre';
import KitapListe from './components/KitapListe';
import FavoriPaneli from './components/FavoriPaneli';
import './App.css';

// Örnek kitap verileri
const KITAPLAR = [
  { id: 1, baslik: 'Sefiller', yazar: 'Victor Hugo', kategori: 'Klasik' },
  { id: 2, baslik: 'Suç ve Ceza', yazar: 'Fyodor Dostoyevski', kategori: 'Klasik' },
  { id: 3, baslik: '1984', yazar: 'George Orwell', kategori: 'Bilim Kurgu' },
  { id: 4, baslik: 'Dune', yazar: 'Frank Herbert', kategori: 'Bilim Kurgu' },
  { id: 5, baslik: 'Yüzüklerin Efendisi', yazar: 'J.R.R. Tolkien', kategori: 'Fantastik' },
  { id: 6, baslik: 'Harry Potter ve Felsefe Taşı', yazar: 'J.K. Rowling', kategori: 'Fantastik' },
  { id: 7, baslik: 'Simyacı', yazar: 'Paulo Coelho', kategori: 'Felsefe' },
  { id: 8, baslik: 'Küçük Prens', yazar: 'Antoine de Saint-Exupéry', kategori: 'Çocuk' },
  { id: 9, baslik: 'Hayvan Çiftliği', yazar: 'George Orwell', kategori: 'Klasik' },
  { id: 10, baslik: 'Bülbülü Öldürmek', yazar: 'Harper Lee', kategori: 'Roman' },
  { id: 11, baslik: 'Uğultulu Tepeler', yazar: 'Emily Brontë', kategori: 'Klasik' },
  { id: 12, baslik: 'Satranç', yazar: 'Stefan Zweig', kategori: 'Klasik' }
];

function App() {
  const [aramaMetni, setAramaMetni] = useState('');
  const [kategori, setKategori] = useState('Tümü');
  const [favoriler, setFavoriler] = useState([]);
  const [filtrelenmisKitaplar, setFiltrelenmisKitaplar] = useState(KITAPLAR);

  // LocalStorage'dan verileri yükle
  useEffect(() => {
    const kayitliArama = localStorage.getItem('kulupKitapligi_arama');
    const kayitliFavoriler = localStorage.getItem('kulupKitapligi_favoriler');
    const kayitliKategori = localStorage.getItem('kulupKitapligi_kategori');
    
    if (kayitliArama) setAramaMetni(kayitliArama);
    if (kayitliFavoriler) setFavoriler(JSON.parse(kayitliFavoriler));
    if (kayitliKategori) setKategori(kayitliKategori);
  }, []);

  // LocalStorage'a verileri kaydet
  useEffect(() => {
    localStorage.setItem('kulupKitapligi_arama', aramaMetni);
    localStorage.setItem('kulupKitapligi_favoriler', JSON.stringify(favoriler));
    localStorage.setItem('kulupKitapligi_kategori', kategori);
  }, [aramaMetni, favoriler, kategori]);

  // Kitapları filtrele
  useEffect(() => {
    let filtrelenmis = KITAPLAR;

    // Arama metnine göre filtrele
    if (aramaMetni) {
      filtrelenmis = filtrelenmis.filter(kitap =>
        kitap.baslik.toLowerCase().includes(aramaMetni.toLowerCase())
      );
    }

    // Kategoriye göre filtrele
    if (kategori !== 'Tümü') {
      filtrelenmis = filtrelenmis.filter(kitap => kitap.kategori === kategori);
    }

    setFiltrelenmisKitaplar(filtrelenmis);
  }, [aramaMetni, kategori]);

  // Favorilere ekle/çıkar
  const toggleFavori = (kitapId) => {
    setFavoriler(prev => {
      if (prev.includes(kitapId)) {
        return prev.filter(id => id !== kitapId);
      } else {
        return [...prev, kitapId];
      }
    });
  };

  // Favori kitapları getir
  const favoriKitaplar = KITAPLAR.filter(kitap => favoriler.includes(kitap.id));

  // Kategorileri getir
  const kategoriler = ['Tümü', ...new Set(KITAPLAR.map(kitap => kitap.kategori))];

  return (
    <div className="vintage-app">
      <div className="container">
        {/* Header */}
        <header className="vintage-header">
          <h1 className="vintage-title">Kulüp Kitaplığı</h1>
          <p className="vintage-subtitle">Kitap Dostları Kulübü Koleksiyonu</p>
        </header>

        {/* Kontroller */}
        <section className="controls-section">
          <div className="controls-grid">
            <AramaCubugu 
              aramaMetni={aramaMetni}
              setAramaMetni={setAramaMetni}
            />
            <KategoriFiltre 
              kategori={kategori}
              setKategori={setKategori}
              kategoriler={kategoriler}
            />
          </div>
        </section>

        {/* Ana İçerik */}
        <div className="main-content">
          {/* Kitap Listesi */}
          <section className="books-section">
            <div className="section-header">
              {filtrelenmisKitaplar.length > 0 
                ? `${filtrelenmisKitaplar.length} Kitap Bulundu` 
                : 'Kitaplar'
              }
            </div>
            <KitapListe 
              kitaplar={filtrelenmisKitaplar}
              favoriler={favoriler}
              toggleFavori={toggleFavori}
            />
          </section>

          {/* Favori Panel */}
          <FavoriPaneli favoriKitaplar={favoriKitaplar} />
        </div>
      </div>
    </div>
  );
}

export default App;