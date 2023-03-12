function media() {
  let nome = window.prompt("Informe o nome do Aluno(a): ");
  let nota1 = Number(window.prompt(`Qual a primeira nota do ${nome} ? `));
  let nota2 = Number(window.prompt(`Qual a segunda nota do ${nome} ? `));
  med = (nota1 + nota2) / 2;

  let msg;
  if (med >= 6) {
    msg = "Meus Parabens!";
  } else {
    msg = "Estude um pouco mais.";
  }

  let resp = document.querySelector("section#res");

  resp.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark></p>`;
  resp.innerHTML += `<p>As notas obtidas foram <mark>${nota1}</mark> e <mark>${nota2}</mark></p>`;
  resp.innerHTML += `<p>A média final foi de <mark>${med}</mark></p>`;
  resp.innerHTML += `<p> A mensagem que temos é: <strong style='color:red;'>${msg}</strong> </p>`;
}
