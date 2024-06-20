// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

const article = pieces[0];
//document.body.appendChild(prixElement);

/*

//rattachement parent
const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(catergorieElement);*/

for(let i = 0; i < pieces.length; i++){

    const sectionFiches = document.querySelector('.fiches');
    const pieceElement = document.createElement("article");
    const imageElement = document.createElement("img");
    imageElement.src = pieces[i].image;

    const nomElement = document.createElement('h2');
    nomElement.innerText = article.nom;

    const prixElement = document.createElement('p');
    prixElement.innerText = `Prix: ${article.prix} (${article.prix < 35? "€" : "€€€"})`;


    const catergorieElement = document.createElement('p');
    catergorieElement.innerText = article.catergorie ?? "(aucune catégorie)";
    
    const descriptionELement = document.createElement('p');
    descriptionELement.innerText = article.description ?? ("pas de description pour le moment");
    
    const disponibiliteElement = document.createElement('p');
    disponibiliteElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";

    sectionFiches.appendChild(pieceElement);
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(catergorieElement);
    pieceElement.appendChild(descriptionELement);

}

