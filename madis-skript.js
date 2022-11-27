function otsi() {
    document = "https://www.pistik.net/huumor/anekdoot/1900";
    let jupp = document.createDocumentFragment();
    let temp = document.createElement("div");
    temp.innerHTML = html;
    jupp.appendChild(temp);
    var tekst = jupp.querySelector("section-box");
    document.querySelector('.anekdoot').append(tekst)
}