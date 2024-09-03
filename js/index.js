        /* Pregunta: ¿Cuál es la función de 'document.getElementById' en JavaScript? 
                        Recupera el elemento id del HTML
        */
        function checkAnswer() {
            /* Pregunta: ¿Qué hace 'prompt' y cómo se puede usar en lugar de 'alert'? 
                            El elemento promp muestra un cuadro que permite al usuario ingresar un valor
            */
            let answer = prompt("Enter your answer:");

            /* Pregunta: ¿Cuál es el propósito de la instrucción 'if' en este fragmento de código? 
                                Saber si el que hacer en caso de que el usuario ingrese la respuesta correcta
            */
            if (answer.toLowerCase() === 'paris') {
                alert("Correct!");
                document.getElementById("question").innerText = "What is the capital of Spain?"; /* <- Si el elemento se pone fuera de if cambiara el texto antes de que se ingrese la respuesta correcta */
            } else {
                alert("Try again!");
            }
        }

        /* Pregunta: ¿Cómo se puede manipular el DOM usando JavaScript para cambiar el contenido de un elemento? 
                        Cambiar el texto de un elemento
        */