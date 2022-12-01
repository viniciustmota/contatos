var fan = document.querySelector(".btn-fantasma")
        
        fan.addEventListener("click", function(){
            alert("ERRO! Preencha todos os campos!")
            
        });
        
        function checkInputs(inputs) {
            var filled = true; 
            
            inputs.forEach(function (input) {
            
            if (input.value === ""){
                filled = false;
                
            }
                
            });

            return filled;
        }

        var inputs = document.querySelectorAll("input");
        var button = document.querySelector(".enviar");
        var fan = document.querySelector(".btn-fantasma")

        

        inputs.forEach(function(input){

            input.addEventListener("keyup", function(){
                if(checkInputs(inputs)) {
                    button.disabled = false;

                    console.log("false");
            fan.style.display = "none";
       
                }else{
                    button.disabled = true;
                    console.log("true"); 

                    fan.style.display = "block";
                    // // fan.addEventListener("click", function(){
                    // //             alert("ERRO! Preencha todos os campos!")
                    //         });
                }
            });
            
        }); 


        var msg = document.querySelector(".enviar")
                    msg.addEventListener('click', function(){
                        let resposta = confirm('Tem certeza que deseja enviar esse e-mail?');
                        if (resposta == true) {
                            alert('E-mail enviado com sucesso!');
                        }else{
                            alert("E-mail cancelado");
                        };
                    });