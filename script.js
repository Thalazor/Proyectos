let contador = 0;

const val_contador = document.getElementById('valor');
const bot_disminuir = document.getElementById('disminuir');
const bot_resetear = document.getElementById('resetear');
const bot_aumentar = document.getElementById('aumentar');

bot_disminuir.onclick = function disminuye() {
    contador--;
    val_contador.innerHTML = contador;
}
bot_aumentar.onclick = function aumenta() {
    contador++;
    val_contador.innerHTML = contador;
}
bot_resetear.onclick = function resetea() {
    contador = 0;
    val_contador.innerHTML = contador;
}
