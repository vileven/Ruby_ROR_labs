function show_result(data){
    var result = document.getElementById("result");
    result.setAttribute('class', 'content');

    result.innerHTML = '<h1>Результат выполнения программы</h1>' + '<h4>Исходная последовательность:</h4>';

    var par = document.createElement('p');
    par.setAttribute('class', 'result');
    for (var i = 0; i < data.value['source_s'].length; i++) {
        if (i == data.value['source_s'].length - 1) {
            var el = document.createElement('span');
            el.textContent = data.value['source_s'][i] + '.';
            par.appendChild(el);
        } else {
            var el = document.createElement('span');
            el.textContent = data.value['source_s'][i] + ', ';
            par.appendChild(el);
        }
    }
    result.appendChild(par);
    result.innerHTML += "<h4>Найденные монотоно возрастающие последовательности:</h4>";
    var seq = data.value['output_s'];
    var par = document.createElement('p');
    par.setAttribute('class', 'result');
    if (seq.empty) {
        par.textContent = "Ничего не найдено :("
    } else {
        for (var i = 0; i < seq.length; i++) {
            //if x == element.length - 1
            for (var j = 0; j < seq[i].length; j++) {
                var sp = document.createElement('span');
                if (j == seq[i].length - 1) {
                    sp.textContent = seq[i][j]
                } else {
                    sp.textContent = seq[i][j] + ', '
                }
                par.appendChild(sp);
            }
            par.innerHTML += "<br>";
        }

    }
    result.appendChild(par);

    result.innerHTML += "<h4>Самая длинная последовательность:</h4>";

    var par = document.createElement('p');
    par.setAttribute('class', 'result');
    for (var i = 0; i < data.value['max_s'].length; i++) {
        if (i == data.value['max_s'].length - 1) {
            var el = document.createElement('span');
            el.textContent = data.value['max_s'][i] + '.';
            par.appendChild(el);
        } else {
            var el = document.createElement('span');
            el.textContent = data.value['max_s'][i] + ', ';
            par.appendChild(el);
        }
    }
    result.appendChild(par);
}

$(document).ready(function(){
    $("#seq_form").bind("ajax:success",
        function(xhr, data, status) {
            // data is already an object
            show_result(data)
        })
})