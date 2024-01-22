## PER CASA

1. fai uscire da riga di comando il valore dei metadata (leggi la blockchain)
2. python random metadata
3. zkevm testnet
4. 7508


## DA IMPELMENTARE
1. metti la max supply agli item
2. metti gli attributi
3. metti il secondo asset (ora stai replicando oggetto1,oggetto2 e cosi via)
4. fatti una licenza come questa su ageofChronos https://rmrk.app/license
5. come funziona tag nella collection metadata
6. la presentation image si puo inserire nel metadata? oppure è una cosa di singular.app?
7. 



1. ogni personaggio ha 4 valori come METADATI che ha "attacco" "difesa" "magia" "fortuna"
2. naming dei 4 slot equippaggiabili
HEAD
BODY
ARM
ACCESSORY

3. inserire due asset per ogni child, il primo è l'asset principale visualizzabile, il secondo è il thumbnail dell'immagine. aggiusta la funzione di smart contract di nestmintwithasset dove inserisci due asset, uno buono e l'altro thumbnail

4. 7508 livello di fine dungeo si aumenta di livello di 1 se finisci la partita altrimenti non si aumenta se la interrompi. il contratto 7508 è indipendnete dai protocolli rmrk? chiedi a Steven. la 7508 è uno sc a parte che da un attributo all nft parent +1 che deve essere autoaccettato. se è cosi, allora si deve fare l'inherit di 7508 ai parent oppure è completamente indipendente? chiedi a steven. forse devi mettere l'autoaccettazione dell'attributo di livello giocatore (che sale di piu 1)

5. come si legge la 7508 lato server? e posso scegliere un livello inferiorer? si ma lato server non preoccuparti

6. per la 7508 > SFY Labs:
MA LA 7508 permette l'up di livello solo di una tipologia di UP, oppure possiamo fare esempio up di livello per 1 dungeon

> SFY Labs:
e poi fare up di livello differente per gli altri dungeon?

> energy0191:
come vuoi

> SFY Labs:
pure potreebbe essere una soluzione

> energy0191:
gli attributi sono infiniti

> SFY Labs:
ma la sai sicuro sta cosa?

> SFY Labs:
si ma capiamoci

> SFY Labs:
attributo di tipo egitto +1

> SFY Labs:
dungeon numero 1

> SFY Labs:
attributo di tipo atlantide +1

> SFY Labs:
dungeon numero 2

> SFY Labs:
quindi potrei avere un personaggio con livello 10 nel primo dungeon e 0 nel secondo?





## DUBBI

è previsto il nesting di child? cioè child di child? se sì, verifica chi può farlo, cioè fai uno script per vedere se 
l'owner di un parent che ha un childA si nesta un'altro child (childB) sotto al childA che già ha
:
## DOMANDE

1. rivediti i catalog, se sono 4 e hai 16 contratti item, puoi aggiungere per ogni catalog 4 contract item ciascuno?


## da fare in production

1. elimina l'import aggiuntivo nei cataloghi dopo che hai finito di fare tutti i test!



items Deployati
setAutoAcceptCollection fatto
Parent Collections added to Singular Registry
Aria Items Collections added to Singular Registry
Luna Items Collections added to Singular Registry
Ryker Items Collections added to Singular Registry
Thaddeus Items Collections added to Singular Registry
All item collections added to Singular Registry
Catalogs configured
Parent squads minted
Aria item assets added
Aria items minted
ConnectTimeoutError: Connect Timeout Error
    at onConnectTimeout (C:\Users\dottdav\Documents\36nftsito\AGE_OF_CHRONOS\AGE_OF_CHRONOS\node_modules\undici\lib\core\connect.js:186:24)
    at C:\Users\dottdav\Documents\36nftsito\AGE_OF_CHRONOS\AGE_OF_CHRONOS\node_modules\undici\lib\core\connect.js:133:46
    at Immediate._onImmediate (C:\Users\dottdav\Documents\36nftsito\AGE_OF_CHRONOS\AGE_OF_CHRONOS\node_modules\undici\lib\core\connect.js:172:33)
    at processImmediate (node:internal/timers:471:21) {
  code: 'UND_ERR_CONNECT_TIMEOUT'
}