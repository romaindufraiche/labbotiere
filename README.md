# La ferme de la Bottière — nouveau site

Refonte premium de labottiere.com, avec une liste de logements inspirée des plateformes de location.

- `index.html` : accueil (hero animé, recherche, logements filtrables, la ferme, expériences, tarifs, infos pratiques)
- `gite-du-margeriaz.html`, `gite-du-colombier.html`, `gite-de-l-atelier.html`, `chambre-marmotte.html` : fiches logement (mosaïque photo, galerie et visionneuse, carte de réservation avec estimation)
- Section « Réserver » en bas de chaque page : logement, dates et voyageurs via des sélecteurs maison (calendrier, liste, compteur), estimation, puis demande envoyée par SMS au 06 43 38 45 72
- `assets/js/data.js` : contenus et tarifs (à modifier ici)
- `assets/js/app.js` : interactions et animations (sans dépendance)
- `assets/css/style.css` : styles

Site 100 % statique : il suffit de déposer le dossier sur n'importe quel hébergeur.
Aperçu local :

```bash
python3 -m http.server 8000
```
