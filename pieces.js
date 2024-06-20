// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

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
 
 //gestion des boutons 
const boutonTrier = document.querySelector(".btn-trier");

boutonTrier.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
     });
     console.log(piecesOrdonnees);
});

const boutonFiltrer = document.querySelector(".btn-filtrer");

boutonFiltrer.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix <= 35;
    });
   console.log(piecesFiltrees)
});

 const boutonDescription = document.querySelector('.btn-desc');
 boutonDescription.addEventListener("click", function(){
    const piecesFiltrees =  pieces.filter(function(piece){
       return piece.description;
    });
    console.log(piecesFiltrees);
 });

 const butonTriDesc = document.querySelector('.btn-tri-dec');
 butonTriDesc.addEventListener("click", function(){
    const PiecesFiltrees = pieces.sort(function(a, b){
        return b.prix - a.prix;
    });
    console.log(PiecesFiltrees);
        
 });

 const noms = pieces.map(piece => piece.nom);
 for(let i = pieces.length -1; i >= 0; i--){
    if(pieces[i].prix > 35) noms.splice(i, 1)
 }

 console.log(noms);

 const abordablesElements = document.createElement('ul');

 for(let i = 0; i < noms.length; i++){
    const nomElement = document.createElement('li');
    nomElement.innerHTML = noms[i] ;
    abordablesElements.appendChild(nomElement);
 }

 document.querySelector('.abordables').appendChild(abordablesElements);
