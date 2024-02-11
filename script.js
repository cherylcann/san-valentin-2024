// wbd para que se repita el gif, contexto: esto borralo si tu gif se repite infinitamente yo lo hice unicamente 
// por que el mio no tiene el loop esto lo puedes arreglar solo en photoshop y es lo mas recomendable por que
// con esta cosa solo gastas recursos
const gif = document.getElementById('gif');

function imagenCargada() {
    setTimeout(() => {
        gif.src = "https://i.imgur.com/Kj63Xew.gif"
        imagenCargada()
    }, 2000);
}
// aca hasta borra en caso de que tu gif sea loop

const btn_no = document.querySelector(".no");
const btn_si = document.querySelector(".si");
var contador = 0;

function no() {
    var respuestas = [
        "¿Segura?",
        "En el fondo quieres",
        "seria muy divertido",
        "Luego te podrías arrepentir",
        "Di que sii",
        "Yo se que tu quieres",
        "Solo sera un día",
        "Dame una oportunidad",
        "No te arrepentirás",
        "Solo di que si"
    ];

    btn_no.innerHTML = respuestas[contador];
    contador += 1;


    var font_si = parseFloat(window.getComputedStyle(btn_si).fontSize);
    btn_si.style.fontSize = ( font_si + font_si * 0.3) + "px";
    btn_si.style.width = ( btn_si.clientWidth + btn_si.clientWidth * 0.3) + "px";
    btn_si.style.height = ( btn_si.clientHeight + btn_si.clientHeight * 0.3) + "px";
}

function si() {
    var duda = document.getElementById("duda");
    var yupi = document.getElementById("yupi");

    duda.classList.add("invisible")
    yupi.classList.add("final")
    yupi.classList.remove("invisible");


}