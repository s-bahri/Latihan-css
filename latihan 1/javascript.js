
    const blinkingText = document.getElementById("blinking-text");
    const neonColors = [
      "#ff0000", // merah
      "#ffff00", // kuning
      "#00ff00", // hijau neon
      "#00ffff", // cyan
      "#0000ff", // biru
      "#ff00ff", // magenta
      "#ffffff"  // putih terang
    ];
    let index = 0;

    setInterval(() => {
      // Ganti warna dan tambahkan efek neon
      blinkingText.style.color = neonColors[index];
      blinkingText.style.textShadow = `0 0 5px ${neonColors[index]}, 0 0 15px ${neonColors[index]}`;
      
      // Sembunyikan/Perlihatkan untuk kelap-kelip
      blinkingText.style.visibility =
        blinkingText.style.visibility === "hidden" ? "visible" : "visible";

      index = (index + 1) % neonColors.length;
    }, 500); // Ganti warna tiap 500ms