// WEBAPP-EXPRESS E WEBAPP-REACT 

Esercizio:
Ora è il momento di prepararci al Front end della nostra Web App!

MILESTONE 1
Mettiamo su un nuovo progetto React aiutandoci con Vite.
Ripuliamo come sempre l’app da file e codice di esempio non necessari.
Installiamo il necessario: 
•	React Router
•	Axios (oggi non è obbligatorio installarlo, lo sarà martedì)
•	Bootstrap (se volete utilizzarlo)

MILESTONE 2
Creiamo un layout di base per la nostra applicazione ed impostiamo le rotte per le diverse pagine.
Creiamo 2 pagine:
•	La Homepage, in cui mostreremo la lista dei film
•	La pagina di dettaglio di un singolo film in cui mostrare sia le informazioni del film che le recensioni

Fate tutto statico.

Bonus
Creare la componente MovieCard in cui passare tramite props il singolo libro.

Integrazione SETUP Web App React
Installate Axios nell'app Front end e provate quindi ad effettuare una chiamata Ajax dalla home del progetto React, per ottenere la lista dei libri.
In ultimo effettuiamo una chiamata AJAX dalla pagina di dettaglio per ottenere il dettaglio di un singolo film, comprese le sue recensioni.

Aggiungere recensioni
Creiamo un componente che contenga il form per le recensioni.
Inseriamo questo componente nella pagina di dettaglio del film.
All’invio del form, la nuova recensione viene salvata nel database e visualizzata nella pagina, in fondo alle altre.

Concludiamo migliorando l’esperienza sulla nostra SPA, inserendo un loader
1. Creiamo un componente loader.
2. Creiamo e sfruttiamo un Context:
   Per dare la possibilità ad ogni componente di attivare o disattivare il loader sulla propria pagina.

Bonus
Personalizziamo l’aspetto della nostra app col CSS.
