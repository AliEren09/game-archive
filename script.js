
const oyunListesi = document.getElementById('Oyunliste'); /* "Oyunliste" id'sine sahip öğeyi seçer ve oyunları listeleyeceğimiz alan olarak saklar.*/
const genreItems = document.querySelectorAll('#Filtre li'); /* Filtre id'sine sahip öğe altındaki tüm <li> öğelerini seçer, her biri bir oyun türünü temsil eder.*/
const aramaGirdisi = document.getElementById('arama'); /* Kullanıcıdan gelen arama verisini aramaGirdisi değişkenine atar.*/

let selectedGenre = "Tümü"; 

function renderGames(gamesToRender) {
  oyunListesi.innerHTML = ""; /* Öğenin içeriğini temizler, her yeni render işleminden önceki içerikleri siler.*/
  gamesToRender.forEach(game => { /* Her bir oyun için döngü çalıştırılır*/
    const div = document.createElement("div"); /* Div öğesi oluşturuyoruz.*/
    div.classList.add("game-item"); /* Oluşturduğumuz div öğesine game-item sınıfı ekleniyor.*/
    div.innerHTML = ` 
      <img src="${game.image}" alt="${game.title}">
      <h3>${game.title}</h3>
      <p>${game.genre} - ${game.year}</p>
    `;/* Kart bilgisi yazılır.*/ 
    div.addEventListener('click', () => openModal(game)); /* Kullanıcı oyun kartına tıkladığında openModal fonksiyonu çağrılır.*/
    oyunListesi.appendChild(div);
  });
}


function openModal(game) {
  document.getElementById('modalImage').src = game.image; /* Modaldaki oyun görselini, tıklanan oyunun görseliyle değiştirir.*/
  document.getElementById('modalTitle').textContent = game.title;  /* Modaldeki başlık kısmını, tıklanan oyunun başlığıyla değiştirir.*/
  document.getElementById('modalGenre').textContent = `${game.genre} - ${game.year}`; /*Modaldeki tür ve yılı birleştirip (örneğin 'Aksiyon - 2020') genre bölümüne ekler.*/
  document.getElementById('modalDesc').textContent = game.description; /* Modaldeki açıklama kısmını, tıklanan oyunun açıklamasıyla değiştirir.*/
  document.getElementById('gameModal').style.display = 'block'; /* Modal penceresini görünür hale getirir.*/
}

/* Modal'ı kapatmaya yarar. Öğe üzerine tıklandığında tetiklenerek modal penceresini gizler.*/
document.querySelector(".close-btn").onclick = () => {
  document.getElementById('gameModal').style.display = 'none';
};
/* Modal dışına tıklandığında modal penceresinin kapanmasını sağlar.*/
window.onclick = e => {
  if (e.target == document.getElementById('gameModal')) {
    document.getElementById('gameModal').style.display = 'none';
  }
};


function applyFilters() {
  const keyword = aramaGirdisi.value.toLowerCase(); /* Arama çubuğuna yazılan girdiyi küçük harfe dönüştürür.*/
  const filtered = oyunlar.filter(game => { /* Oyunları filtreler.*/
    const matchesKeyword = game.title.toLowerCase().includes(keyword);  /* Oyun başlığının, arama anahtar kelimesini içerip içermediğini kontrol eder.*/
    const matchesGenre = selectedGenre === "Tümü" || game.genre === selectedGenre;    /* Oyun türü, seçilen tür ile uyuyor mu kontrol eder.*/
    return matchesKeyword && matchesGenre; /* Hem anahtar kelime hem de tür filtresine uyan oyunları döndürür.*/
  });
  renderGames(filtered); /* Filtrelenmiş oyunları sayfada görüntüler.*/
}


aramaGirdisi.addEventListener("input", applyFilters);
genreItems.forEach(item => {
  item.addEventListener("click", () => {
    genreItems.forEach(i => i.classList.remove("active"));/* Tüm filtrelerin active sınıfını kaldırır.*/
    item.classList.add("active"); // Kulanıcının tıkladığı öğeye active sınfını ekler.
    selectedGenre = item.dataset.genre; /* Tıklanan öğeninin data-genre değerini alır, selectedGenreye atar.*/
    applyFilters();  /* Filtreleme işlevini çalıştırır.*/
  });
});


renderGames(oyunlar); // Oyunları görüntüler.