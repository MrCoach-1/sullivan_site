### Pubblicare un sito fatto con **Gatsby** su **GitHub Pages** richiede alcuni passaggi chiave. Ecco la procedura dettagliata:

#### 1. **Prepara il progetto Gatsby**

Prima di iniziare, assicurati che il tuo progetto Gatsby sia funzionante in locale e pronto per la build. Se non hai ancora creato un progetto Gatsby, puoi crearne uno nuovo con:

```bash
gatsby new my-gatsby-site
cd my-gatsby-site
```

Se il progetto esiste già, assicurati di avere tutto installato e che il sito funzioni correttamente eseguendo:

```bash
gatsby develop
```

#### 2. **Configura il file `gatsby-config.js`**

Nel file `gatsby-config.js`, dovrai specificare l'URL del tuo sito e il `pathPrefix` per GitHub Pages.

Se stai pubblicando il sito su GitHub Pages per un repository personale (quindi visibile su `https://<username>.github.io`), non è necessario un `pathPrefix`. Ma se stai pubblicando in una repository che non è il sito personale (esempio `https://<username>.github.io/<repository>`), devi usare `pathPrefix`.

Ecco un esempio:

```js
module.exports = {
  pathPrefix: "/<repository>", // Sostituisci <repository> con il nome del tuo repository GitHub
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://<username>.github.io/<repository>`, // Sostituisci <username> e <repository>
  },
  plugins: [
    // I tuoi plugin Gatsby
  ],
};
```

Se il sito si trova in un repository personale (es. `https://<username>.github.io`), lascia `pathPrefix` vuoto.

#### 3. **Installa il pacchetto `gh-pages`**

`gh-pages` è un pacchetto che semplifica la pubblicazione su GitHub Pages. Aggiungilo al tuo progetto:

```bash
npm install gh-pages --save-dev
```

#### 4. **Aggiungi gli script al file `package.json`**

Nel file `package.json`, aggiungi due script:

- Uno per la build del sito con Gatsby e il prefisso del percorso (se richiesto).
- Un altro per pubblicare su GitHub Pages.

Ecco come configurarlo:

```json
{
  "scripts": {
    "build": "gatsby build --prefix-paths", // Usa --prefix-paths per rispettare il pathPrefix
    "deploy": "gatsby build --prefix-paths && gh-pages -d public"
  }
}
```

Se non utilizzi `pathPrefix` (es. pubblicando nel repository personale), puoi omettere `--prefix-paths`.

#### 5. **Configura il repository GitHub**

1. Vai su [GitHub](https://github.com/) e crea un nuovo repository per il tuo progetto. Puoi chiamarlo come preferisci, ma se stai pubblicando un **sito personale**, il nome del repository deve essere **`<username>.github.io`**.

2. Una volta creato il repository, collega il tuo progetto locale al repository remoto:

```bash
git init
git remote add origin https://github.com/<username>/<repository>.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

Sostituisci `<username>` e `<repository>` con il nome utente GitHub e il nome del repository.

#### 6. **Genera la build del sito Gatsby**

Esegui il comando per creare la build del sito, che sarà generata nella cartella `public`:

```bash
npm run build
```

Questo creerà i file ottimizzati che verranno pubblicati su GitHub Pages.

#### 7. **Pubblica su GitHub Pages**

Ora puoi pubblicare il tuo sito su GitHub Pages eseguendo lo script `deploy` che hai configurato nel file `package.json`:

```bash
npm run deploy
```

Questo comando eseguirà la build del sito e pubblicherà automaticamente la cartella `public` nella branch `gh-pages` del tuo repository GitHub.

#### 8. **Configura GitHub Pages**

1. Vai nella pagina del tuo repository su GitHub.
2. Clicca su **Settings**.
3. Scorri fino alla sezione **GitHub Pages**.
4. Assicurati che la **branch** sia impostata su `gh-pages` e che la directory sia `root`.

Dopo un paio di minuti, il tuo sito sarà disponibile all'indirizzo: `https://<username>.github.io/<repository>/`.

#### 9. **Aggiorna il sito**

Ogni volta che apporti modifiche al tuo sito, esegui i seguenti comandi per aggiornare il sito su GitHub Pages:

```bash
git add .
git commit -m "Updated site"
git push origin main
npm run deploy
```

Questo invierà le modifiche a GitHub e pubblicherà la nuova versione del sito.

#### 10. **Controlla il sito**

Vai a `https://<username>.github.io/<repository>/` per vedere il tuo sito pubblicato.

https://mrcoach-1.github.io/sullivan_site/

### Opzione per i siti personali

Se stai pubblicando il sito nel tuo repository personale (es: `https://<username>.github.io`), segui gli stessi passaggi, ma:

1. Non utilizzare `pathPrefix` nel file `gatsby-config.js`.
2. Il sito sarà accessibile direttamente su `https://<username>.github.io` senza un percorso aggiuntivo.

### Risoluzione dei problemi

- **Errore 404 su GitHub Pages**: Se il tuo sito non viene visualizzato correttamente, assicurati di aver configurato correttamente il `pathPrefix` e la configurazione di GitHub Pages nelle impostazioni del repository.
- **Modifiche non visibili**: Ricorda che GitHub Pages potrebbe impiegare qualche minuto per aggiornare il sito dopo la pubblicazione.

Con questi passaggi, sarai in grado di pubblicare correttamente il tuo sito Gatsby su GitHub Pages!