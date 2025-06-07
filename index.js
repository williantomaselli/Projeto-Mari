document.addEventListener("DOMContentLoaded", function () {
  const botao     = document.querySelector(".botao");
  const lhamaImg  = document.querySelector(".lhama-img");
  const audio     = document.getElementById("player");

  // Caminhos das imagens
  const imgFrente = "./images/l3.jpeg";
  const imgVerso  = "./images/Design sem nome (1)-Photoroom.png";

  let mostrandoFrente = true;

  function onClickOrTouch() {
    // play/pause do áudio
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }

    // animação flip
    lhamaImg.style.transform = "perspective(600px) rotateY(90deg)";
    setTimeout(() => {
      mostrandoFrente = !mostrandoFrente;
      lhamaImg.src = mostrandoFrente ? imgFrente : imgVerso;
      lhamaImg.style.transform = "perspective(600px) rotateY(0deg)";
    }, 400);
  }

  // click para desktop
  botao.addEventListener("click", onClickOrTouch);
  // touch para mobile
  botao.addEventListener("touchstart", onClickOrTouch);
});
