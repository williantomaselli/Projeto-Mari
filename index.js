/*
      Essa função utiliza requestAnimationFrame para realizar a animação contínua da faixa.
      Ao duplicar as imagens, assim que o primeiro conjunto sair da tela, reinicia a posição.
    */
      const carouselTrack = document.getElementById('carouselTrack');
      let speed = 0.5; // pixels por frame (ajuste conforme necessário)
      let pos = 0;
  
      // Número de slides (por conjunto)
      const numSlides = 3;
  
      function animate() {
        pos -= speed;
        // Calcula a largura de um conjunto de slides
        const containerWidth = document.querySelector('.carousel-container').offsetWidth;
        const totalSetWidth = containerWidth * numSlides;
        // Se percorrermos a largura de um conjunto, reinicia o offset
        if (Math.abs(pos) >= totalSetWidth) {
          pos = 0;
        }
        carouselTrack.style.transform = 'translateX(' + pos + 'px)';
        requestAnimationFrame(animate);
      }
  
      requestAnimationFrame(animate);