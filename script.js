particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 150, // muitas partículas
        "density": {
          "enable": true,
          "value_area": 1200
        }
      },
      "color": {
        "value": ["#ffffff", "#8a2be2", "#00bfff"] // branco, roxo, azul
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.8,
        "random": true
      },
      "size": {
        "value": 2,
        "random": true
      },
      "line_linked": {
        "enable": false
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 150,
          "line_linked": {
            "opacity": 0.4
          }
        },
        "push": {
          "particles_nb": 4
        }
      }
    },
    "retina_detect": true
  });
 
 


function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultado = document.getElementById("resultado");
 
    if (peso > 0 && altura > 0) {
      const imc = peso / (altura * altura);
      let classificacao = "";
 
      if (imc < 18.5) classificacao = "Abaixo do Peso";
      else if (imc < 25) classificacao = "Peso normal";
      else if (imc < 30) classificacao = "Sobrepeso";
      else classificacao = "Obesidade";
 
      resultado.textContent = `IMC: ${imc.toFixed(2)} (${classificacao})`;
    } else {
      resultado.textContent = "Digite valores válidos.";
    }
  }
 
