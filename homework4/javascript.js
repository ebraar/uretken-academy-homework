// Resim URL'leri
const imageUrls = [
    'resim1.jpg',
    'resim2.jpg',
    'resim3.jpg',
    // ... diğer resim URL'leri buraya eklenebilir
  ];
  
  // Resim galerisi oluşturma fonksiyonu
  function createImageGallery() {
    const gallery = document.getElementById('imageGallery');
  
    // Galeri temizleme
    gallery.innerHTML = '';
  
    // Rastgele resimleri galeriye ekleme
    for (let i = 0; i < 15; i++) { // 3x5 = 15 resim
      const randomIndex = Math.floor(Math.random() * imageUrls.length);
      const imageUrl = imageUrls[randomIndex];
  
      const img = document.createElement('img');
      img.src = imageUrl;
  
      gallery.appendChild(img);
    }
  }
  
  // Sayfa yüklendiğinde resim galerisini oluştur
  window.addEventListener('load', createImageGallery);  