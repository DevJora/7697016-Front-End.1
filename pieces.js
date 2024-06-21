// Récupération des pièces depuis le fichier JSON
const pieces = await fetch("pieces-autos.json").then(pieces => pieces.json());



function genererPieces(pieces){
    for (let i = 0; i < pieces.length; i++) {
        const article = pieces[i];
        // Récupération de l'élément du DOM qui accueillera les fiches
        const sectionFiches = document.querySelector(".fiches");
        // Création d’une balise dédiée à une pièce automobile
        const pieceElement = document.createElement("article");
        // Création des balises 
        const imageElement = document.createElement("img");
        imageElement.src = article.image;
        const nomElement = document.createElement("h2");
        nomElement.innerText = article.nom;
        const prixElement = document.createElement("p");
        prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
        const categorieElement = document.createElement("p");
        categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
        const stockElement = document.createElement("p");
        stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";
        //Code ajouté
        const avisBouton = document.createElement("button");
        avisBouton.dataset.id = article.id;
        avisBouton.textContent = "Afficher les avis";
        
        // On rattache la balise article a la section Fiches
        sectionFiches.appendChild(pieceElement);
        
        // On rattache la balise article a la section Fiches
        sectionFiches.appendChild(pieceElement);
        // On rattache l’image à pieceElement (la balise article)
        pieceElement.appendChild(imageElement);
        pieceElement.appendChild(nomElement);
        pieceElement.appendChild(prixElement);
        pieceElement.appendChild(categorieElement);
        //Ajout des éléments au DOM pour l'exercice
        pieceElement.appendChild(descriptionElement);
        pieceElement.appendChild(stockElement);
    } 
}


genererPieces(pieces);

 
 //gestion des boutons 
const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
     });

     document.querySelector('.fiches').innerHTML = "";

     genererPieces(piecesOrdonnees);
});

const boutonFiltrer = document.querySelector(".btn-filtrer");

boutonFiltrer.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix <= 35;
    });
    document.querySelector('.fiches').innerHTML = "";

    genererPieces(piecesFiltrees);
});

 const boutonDescription = document.querySelector('.btn-desc');
 boutonDescription.addEventListener("click", function(){
    const piecesFiltrees =  pieces.filter(function(piece){
       return piece.description;
    });
    document.querySelector('.fiches').innerHTML = "";

    genererPieces(piecesFiltrees);
 });

boutonDecroissant.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return b.prix - a.prix;
     });
     document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);
});

const boutonNoDescription = document.querySelector(".btn-nodesc");

boutonNoDescription.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.description
    });
    document.querySelector('.fiches').innerHTML = "";

    genererPieces(PiecesFiltrees);
        
 });

 const butonTriPrix = document.querySelector('.ipt-tri-prix');
 butonTriPrix.addEventListener("input", function(){
    document.querySelector('.valuemax').innerHTML = `${butonTriPrix.value} euros`;
    const pieceFiltrees = pieces.filter(function(piece){
        return piece.prix <= butonTriPrix.value;
    });
    document.querySelector('.fiches').innerHTML = "";
    genererPieces(pieceFiltrees);
 } )
 function triValuePrix(value){
    console.log(value)
    document.querySelector('.valuemax').innerHTML = `${value} euros`;
 } ;

 const noms = pieces.map(piece => piece.nom);
 for(let i = pieces.length -1; i >= 0; i--){
    if(pieces[i].prix > 35) noms.splice(i, 1)
 }


