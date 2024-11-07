document.addEventListener("DOMContentLoaded", function() {
    // SVG haritayı yükleme
    const svgMap = document.getElementById("svgMap").contentDocument; // SVG içeriğine erişim
    const countries = svgMap.querySelectorAll("path"); // SVG'deki ülke öğelerine (path) erişim
    const countryNameDisplay = document.getElementById("countryNameDisplay"); // Alt ortada ülke adını gösterecek div
    const infoBox = document.getElementById("infoBox"); // Sağda açılacak bilgi kutusu
    const countryTitle = document.getElementById("countryTitle"); // Bilgi kutusundaki ülke adını gösterecek başlık

    countries.forEach(country => {
        // Ülke üzerine gelindiğinde adı gösterme
        country.addEventListener("mouseenter", function() {
            const countryName = country.getAttribute("title") || "Bilinmiyor"; // Title özniteliğinden ülke adı
            countryNameDisplay.textContent = countryName; // Alt ortada ülke adını göster
        });

        // Ülke üzerinden ayrıldığında adı gizleme
        country.addEventListener("mouseleave", function() {
            countryNameDisplay.textContent = ""; // Ülke adını gizle
        });

        // Ülkeye tıklandığında bilgi kutusunu açma
        country.addEventListener("click", function() {
            const countryName = country.getAttribute("title") || "Bilinmiyor"; // Title özniteliğinden ülke adı
            countryTitle.textContent = countryName; // Ülke adını bilgi kutusunda göster
            infoBox.classList.remove("hidden"); // Bilgi kutusunu görünür yap

            // Durum butonlarına tıklama olayları ekleme
            document.querySelectorAll(".status-button").forEach(button => {
                button.onclick = () => {
                    const status = button.getAttribute("data-status"); // Butonun durumu (örn. Gittim, Yaşadım)
                    updateCountryColor(country, status); // Ülkenin rengini güncelle
                };
            });
        });
    });

    // Ülke rengini güncelleme fonksiyonu
    function updateCountryColor(country, status) {
        const colors = {
            "visited": "#FF6F61",      // "Gittim" rengi
            "lived": "#42A5F5",        // "Yaşadım" rengi
            "living": "#66BB6A",       // "Yaşıyorum" rengi
            "wantToVisit": "#FFA726",  // "Gitmek İstiyorum" rengi
            "notVisited": "#D3D3D3"    // "Gitmedim" rengi
        };
        country.style.fill = colors[status]; // Ülkenin rengini güncelle
    }
});
