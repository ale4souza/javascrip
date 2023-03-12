function calcular() {
  let num = Number(window.prompt(`Informe o número: `));
  let res = num % 2;

  let msg;
  if (res == 0) {
    msg = `O ${num} é par!`;
  } else {
    msg = `O ${num} é impar`;
  }

  let resp = document.querySelector("section#result");

  resp.innerHTML = `<p><strong>${msg}</strong></p>`;
}
