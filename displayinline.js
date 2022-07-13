const $elementExample_first = document.querySelector("#estudo_um");
const $elementExample_second = document.querySelector("#estudo_dois");
const $elementExample_third = document.querySelector("#estudo_tres");
let $Aplicado = false;

document.getElementById("estudo_div").style.display = 'none';

function aplicarPropriedade() {        
    if ($Aplicado) {        
        $elementExample_first.classList.toggle('aplicar-propriedade');        
        $elementExample_second.classList.toggle('aplicar-propriedade');                
        $elementExample_third.classList.toggle('aplicar-propriedade');        
        $Aplicado=false;
        document.getElementById("estudo_div").style.display = 'none';

    } else {
        $elementExample_first.classList.add('aplicar-propriedade');
        $elementExample_second.classList.add('aplicar-propriedade');
        $elementExample_third.classList.add('aplicar-propriedade');
        $Aplicado=true;        
        document.getElementById("estudo_div").style.display = 'block';

    }
}

