async function generate() {
  const template = await fetch("template.html").then(r => r.text());

  const name = document.getElementById("name").value;
  const position = document.getElementById("position").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

let result = template .replace(/{{name}}/g, name) .replace(/{{position}}/g, position) .replace(/{{phone}}/g, phone) .replace(/{{email}}/g, email);

  document.getElementById("signature").innerHTML = result;
}

function copySignature() {
  const el = document.getElementById("signature");

  const range = document.createRange();
  range.selectNode(el);

  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  document.execCommand("copy");
  selection.removeAllRanges();

  alert("Podpis zkopírován 👍");
}
