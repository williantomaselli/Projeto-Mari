document.addEventListener("DOMContentLoaded", function () {
  const botao     = document.querySelector(".botao");
  const lhamaImg  = document.querySelector(".lhama-img");
  const audio     = document.getElementById("player");

  // Caminhos das imagens (frente e verso)
  const imgFrente = "./images/l3.jpeg";
  const imgVerso  = "./images/Design sem nome (1)-Photoroom.png";

  let mostrandoFrente = true;

  botao.addEventListener("click", function () {
    // 1) Toca ou pausa o áudio
    if (audio.paused) {
      audio.play();
    }
    // 2) Faz o flip da lhama
    lhamaImg.style.transform = "perspective(600px) rotateY(90deg)";
    setTimeout(() => {
      mostrandoFrente = !mostrandoFrente;
      lhamaImg.src = mostrandoFrente ? imgFrente : imgVerso;
      lhamaImg.style.transform = "perspective(600px) rotateY(0deg)";
    }, 400);
  });
});
