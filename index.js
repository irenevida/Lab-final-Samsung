file = open("index.js","w")
content = '''
function validation (){

    // get all input elements (name, email, password, confirm)
    var elements = document.querySelectorAll("input");
    
    // initialise valid elements
    var valid_elements = [];

    // iterate through input elements
    elements.forEach(element => {
        
        // create error message for empty fields in red
        var required_text = document.createElement("p");
        required_text.appendChild(document.createTextNode("Campo obligatorio"));
        required_text.style.color = "red";

        }
        else if ( element.type === "email" ) {
            var validation_msg = "El email introducido no es correcto"
        }
        else if (element.type === "password") {
            if (element.name === "password" ) {
                var validation_msg = "Mínimo 8  caracteres"
            }
        }
        error_text.appendChild(document.createTextNode(validation_msg));
        error_text.style.color = "red";

        // get icons to show
        var success_icon = document.createElement("img");
        success_icon.setAttribute("src", "imagen correcto");
        success_icon.className = "success";
        var error_icon = document.createElement("img");
        error_icon.setAttribute("src", "imagen incorrecto");   
        error_icon.className = "error";

        // check if input field is empty
        const isEmpty = str => !str.trim().length;
        element.addEventListener("input", function() {
            // if it is empty
            if ( isEmpty(this.value) ) {
                // remove validation error message 
                if (document.body.contains(error_text)){
                    element.parentNode.removeChild(error_text);
                }

                // remove error icon 
                if (document.body.contains(imagen_incorrecto)){
                    element.parentNode.removeChild(imagen_incorrecto);
                }

                // show requirement error message
                element.parentNode.appendChild(required_text, element);

                // change element border color to red
                element.style.border = "red";  
                element.parentNode.appendChild(imagen_incorrecto, element); 
            }
            // if it is not empty
            else {
                
                // remove requirement error message 
                if (document.body.contains(required_text)){
                    element.parentNode.removeChild(required_text);
                }

                // remove error icon 
                if (document.body.contains(imagen_incorrecto)){
                    element.parentNode.removeChild(imagen_incorrecto);
                }

                // remove success icon
                if (document.body.contains(imagen_correcto)){
                    element.parentNode.removeChild(imagen_correcto);
                }
          
                // get condition to change validation message for confirmation field
                if ( element.name === "confirm" ) {
                    condition = (document.getElementById('password').value !== element.value);
                }
                else {
                    condition = (element.checkValidity() === false);
                }

                // if input is invalid
                if ( condition ) {
                    // show validation error message
                    element.parentNode.appendChild(error_text, element);

                    // change element border color to red
                    element.style.border = "red";
                    element.parentNode.appendChild(error_icon, element);
                    
                    // remove field from valid elements
                    const index = valid_elements.indexOf(element.name);
                    if (index > -1) { 
                        valid_elements.splice(index, 1); 
                    }
                }
                // if input is valid
                else {
                    // remove validation error message
                    if (document.body.contains(error_text)){
                        element.parentNode.removeChild(error_text);
                    }

                    // remove error icon 
                    if (document.body.contains(imagen_incorrecto)){
                        element.parentNode.removeChild(imagen_incorrecto);
                    }
                    
                    // change element border color to green
                    element.style.border = "green";
                    element.parentNode.appendChild(imagen_correcto, element);
                    
                    // add field to valid elements
                    if ( !valid_elements.includes(element.name) ){
                        valid_elements.push(element.name)
                    }
                }
            }
        });

    });

    document.getElementById('button').addEventListener("click", function(){

        const all_elements = ["name", "email", "password", "confirm"]
        if ( all_elements.every(field => valid_elements.includes(field)) ) {
            alert("SE HA INSCRITO CORRECTAMENTE");
        }
        else {
           alert("NO HA PODIDO INSCRIBIRSE");
        }
    });

    return valid_elements
}

window.onload = validation;
file.close() 
