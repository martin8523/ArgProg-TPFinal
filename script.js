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



const HTMLResponse = document.querySelector("#app");
const templateUL = document.createElement(`ul`);

$.ajax({ method: "GET", url: "http://jsonplaceholder.typicode.com/posts" })

    //users: es la RESPUESTA DE LA PETICION
    .done(function (posts) {

        //Mostrar por consola la respuesta de la API
        console.log(posts)

        for (let index = 0; index < 6; index++) {
         
          
            let elem = document.createElement("button");
            elem.appendChild(
                document.createTextNode(`Titulo: ${posts[index].title}, Comentario: ${posts[index].body}`)
            );
            templateUL.appendChild(elem);
            HTMLResponse.appendChild(templateUL);
        }
      })  
        

  
var camposHoja1 =[]
function almacenavar(){
      for (let index = 0; index < 5; index++) {
        camposHoja1[index] = document.getElementById(index).value
      }
    }

    const HTMLResponse2 = document.querySelector("#form2Hoja1");
    const templateUL2 = document.createElement(`ul`);
    function completar(){
            let elem = document.createElement("p");
            elem.appendChild(
                document.createTextNode("Nombre: " + camposHoja1[0]+"  Apellido: " +camposHoja1[1]+" Mail: " 
                + camposHoja1[2]+" Fecha: " + camposHoja1[3]+"  Comentarios: " +camposHoja1[4])
                
            );
            templateUL2.appendChild(elem);       
            HTMLResponse2.appendChild(templateUL2);
    }
  
