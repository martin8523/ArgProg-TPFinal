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

$.ajax({ method: "GET", url: "http://jsonplaceholder.typicode.com/users" })

    //users: es la RESPUESTA DE LA PETICION
    .done(function (users) {

        //Mostrar por consola la respuesta de la API
        console.log(users)

        //Mostrar respuesta de API en un componente HTML
       // document.getElementById("app").innerHTML = users;

        //Mostrar respuesta de API en un componente HTML recorriendo cada usuario
        users.forEach((user) => {


            let elem = document.createElement("div");
            elem.appendChild(
                document.createTextNode(`Nombre: ${user.name}, Ciudad: ${user.address.city}`)
            );
            templateUL.appendChild(elem);
        });
        HTMLResponse.appendChild(templateUL);
    }
    )

    function almacenavar(){
      var campoNombre = camponombre.value;
      var campoApellido = campoapellido.value;
      let campoEmail

      console.log(campoNombre, campoApellido);
    }