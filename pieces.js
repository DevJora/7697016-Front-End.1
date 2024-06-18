const article = pieces[0];

const imageElement = document.createElement('img');
imageElement.src = article.image;

const nomElement = document.createElement('h2');
nomElement.innerText = article.nom;

const prixElement = document.createElement('p');
prixElement.innerText = `Prix: ${article.prix} (${article.prix < 35? "€" : "€€€"})`;


document.body.appendChild(prixElement);

const catergorieElement = document.createElement('p');
catergorieElement.innerText = article.catergorie ?? "(aucune catégorie)";

const descriptionELement = document.createElement('p');
descriptionELement.innerText = article.description ?? ("pas de description pour le moment");

const disponibiliteElement = document.createElement('p');
disponibiliteElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";

//rattachement parent
const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(catergorieElement);

