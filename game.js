function send() {
    number1 = document.getElementById('numero1').value
    number2 = document.getElementById('numero2').value
    question = number1 + 'x' + number2
    actual_answer = parseInt(number1) * parseInt(number2)

    qw = "<h4 id='wordDisplay'> P. " + question + "</h4>";
    ib = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    cb = "<br><br><button class='btn btn-info' onClick='check()'>Checar</button>";
    row = qw + ib + cb;
    document.getElementById("output").innerHTML = row;
}