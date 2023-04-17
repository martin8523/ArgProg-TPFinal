function reveal() {
      var reveals = document.querySelectorAll(".reveal");
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }


    window.addEventListener("scroll", reveal);




$(document).ready(function () {
    var navListItems = $('div.setup-panel div a'), // tab nav items
            allWells = $('.setup-content'), // content div
            allNextBtn = $('.nextBtn'); // next button

    allWells.hide(); // hide all contents by defauld

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
                $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-primary');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });
    // next button
    allNextBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='email'],input[type='password'],input[type='url']"),
            isValid = true;
           // Validation
        $(".form-group").removeClass("has-error");
        for(var i=0; i<curInputs.length; i++){
            if (!curInputs[i].validity.valid){
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }
        // move to next step if valid
        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-primary').trigger('click');
});

$(document).ready(function(){
  $("#form1").validate({
    rules:{
      floatingInput:{
        required:true,
        text:true
      },
      floatingPassword:{
        required:true,
        minlength:8
      },
    }
  });
  
  });

  function hide() {
    document.getElementById('sectionform2').style.display = 'block';
    location.href="#sectionform2";    
      }

      function go() {
        document.getElementById('sectionform2').style.display = 'none';
        location.href="#maincontainter";    
          }

const HTMLResponse = document.querySelector("#app");
const templateUL = document.createElement(`ul`);

$.ajax({ method: "GET", url: "https://jsonplaceholder.typicode.com/posts" })

    //users: es la RESPUESTA DE LA PETICION
    .done(function (posts) {
        console.log(posts)

        for (let index = 0; index < 6; index++) {                  
            let elem = document.createElement("button");
            elem.appendChild(document.createTextNode(`Titulo: ${posts[index].title}, Comentario: ${posts[index].body}`));
            templateUL.appendChild(elem);
            HTMLResponse.appendChild(templateUL);
        }
      })  
        

  
var camposHoja =[]
function almacenavar(){
      for (let index = 0; index <= 6; index++) {
        camposHoja[index] = document.getElementById(index).value;
      }
    }


function almacenavar2(){
      for (let index = 6; index <= 11; index++) {
        camposHoja[index] = document.getElementById(index).checked;
      }
    }

    const HTMLResponse2 = document.querySelector("#form2Hoja1");
    const templateUL2 = document.createElement(`ol`);
    const HTMLResponse3 = document.querySelector("#nrorand");
    const templateUL3 = document.createElement(`ol`);
    const numerorand = Math.random();
    function completar(){
      console.log(camposHoja);
            let elem = document.createElement("p");
            elem.appendChild(
                document.createTextNode("Nombre: " + camposHoja[0]+"  Apellido: " 
                +camposHoja[1]+" Mail: "+ camposHoja[2]));
            elem.appendChild(document.createElement("br"));
            elem.appendChild(document.createTextNode(" Fecha del Evento: " + camposHoja[3]+
            "Tipo de Evento: " + camposHoja[5]));
            elem.appendChild(document.createElement("br"));
            elem.appendChild(document.createTextNode("Comentarios: " +camposHoja[4]));
            elem.appendChild(document.createElement("br"));
            elem.appendChild(document.createTextNode("Especificaciones Tecnicas solicitadas: "));
            elem.appendChild(document.createElement("br"));
            elem.appendChild(document.createElement("br"));
            if (camposHoja[6] == true) {
              elem.appendChild(document.createTextNode("Iluminacion"));
              elem.appendChild(document.createElement("br"));
            };
            if (camposHoja[7] == true) {
              elem.appendChild(document.createTextNode("Sonido"));
              elem.appendChild(document.createElement("br"));
            };
            if (camposHoja[8] == true) {
              elem.appendChild(document.createTextNode("Escena"));
              elem.appendChild(document.createElement("br"));
            };
            if (camposHoja[9] == true) {
              elem.appendChild(document.createTextNode("Vestuario"));
              elem.appendChild(document.createElement("br"));
            };
            if (camposHoja[10] == true) {
              elem.appendChild(document.createTextNode("Logistica"));
              elem.appendChild(document.createElement("br"));
            };
            if (camposHoja[11] == true) {
              elem.appendChild(document.createTextNode("Refrigerio"));
              elem.appendChild(document.createElement("br"));
            };
            elem.appendChild(document.createElement("br"));
            templateUL2.appendChild(elem);       
            HTMLResponse2.appendChild(templateUL2);
            templateUL3.appendChild(numerorand)
            HTMLResponse3.appendChild(templateUL3)
    }
    

document.addEventListener("DOMContentLoaded", () => {
  // Escuchamos el click del botón
  const $boton = document.querySelector("#btnCrearPdf");
  $boton.addEventListener("click", () => {
      const $elementoParaConvertir = document.body; // <-- Aquí puedes elegir cualquier elemento del DOM
      html2pdf()
          .set({
              margin: 1,
              filename: 'documento.pdf',
              image: {
                  type: 'jpeg',
                  quality: 0.98
              },
              html2canvas: {
                  scale: 3, // A mayor escala, mejores gráficos, pero más peso
                  letterRendering: true,
              },
              jsPDF: {
                  unit: "in",
                  format: "a3",
                  orientation: 'portrait' // landscape o portrait
              }
          })
          .from($elementoParaConvertir)
          .save()
          .output('.C:\Users\54234\Desktop\123123123.pdf', 'f')
          .then(pdfResult => {
              $.ajax({
                  type: "POST",
                  url: "/guardarPdf",
                  data: `pdf=${pdfResult}`,
                  success: function (res) {
                      return true;
                  }
              });
          })
          .catch(err => console.log(err)); 
  });
});