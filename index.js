document.addEventListener("DOMContentLoaded", function () {
  const botao = document.querySelector(".botao");
  const lhamaImg = document.querySelector(".lhama-img");

  // Caminhos das imagens (altere para as imagens que deseja usar)
  const imgFrente = "./images/l3.jpeg";       // imagem inicial/frente
  const imgVerso = "./images/Design sem nome (1)-Photoroom.png"; // imagem para mostrar após a transição (verso)

  let mostrandoFrente = true; // controle de qual imagem está sendo exibida

  botao.addEventListener("click", function () {
    // Primeiro, aplica o flip até 90 graus (meio giro)
    lhamaImg.style.transform = "perspective(600px) rotateY(90deg)";
    
    // Após 400ms (metade da transição de 0.4s) trocamos a imagem...
    setTimeout(() => {
      mostrandoFrente = !mostrandoFrente;
      lhamaImg.src = mostrandoFrente ? imgFrente : imgVerso;
      // ...e voltamos o flip para 0 graus (completando a transição)
      lhamaImg.style.transform = "perspective(600px) rotateY(0deg)";
    }, 400);
  });
});
