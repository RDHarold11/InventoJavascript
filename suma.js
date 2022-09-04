
const $enviar = document.querySelector(".btn"),
$generar = document.querySelector(".generar");
let contador = 0;

function numeroRandom(){ 
    return (Math.round(Math.random() * 100));
}

$generar.addEventListener("click", () =>{
    document.getElementById("uno").innerHTML = numeroRandom();
    document.getElementById("dos").innerHTML = numeroRandom();
});


$enviar.addEventListener("click", ()=>{
    const $resultado = document.getElementById("resultado").value;
    const $uno = document.getElementById("uno").innerHTML;
    const $dos = document.getElementById("dos").innerHTML;
    let resultado = (parseInt($uno) + parseInt($dos));

    if(resultado == $resultado){
        contador++;
        document.getElementById("racha").innerHTML = contador;
        Swal.fire({
            title: 'Correcto!',
            imageUrl: 'https://placeimg.com/300/300/animals',
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: 'Custom image',
          })
    }
    else{
        Swal.fire({
            title: 'No sabe sumá?',
            imageUrl: 'pp.png',
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: 'Custom image',
          })
        contador = 0;
        document.getElementById("racha").innerHTML = contador;
    }
});

