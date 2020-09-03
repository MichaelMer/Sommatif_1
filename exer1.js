function operations() {
    let valeur1 = Number(document.getElementById('valeur1').value);
    let valeur2 = Number(document.getElementById('valeur2').value);
    let operateur = document.getElementById('operateur').value;
    let solution = (valeur1) + operateur + (valeur2);
    document.getElementById('solution').value = solution;
}