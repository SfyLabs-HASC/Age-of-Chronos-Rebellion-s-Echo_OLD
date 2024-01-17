## DA IMPELMENTARE

1. ogni personaggio ha 4 valori come METADATI che ha "attacco" "difesa" "magia" "fortuna"
2. naming dei 4 slot equippaggiabili DA FARE IN FUTURO!
HEAD
BODY
ARM
ACCESSORY

3. inserire due asset per ogni child, il primo è l'asset principale visualizzabile, il secondo è il thumbnail dell'immagine. aggiusta la funzione di smart contract di nestmintwithasset dove inserisci due asset, uno buono e l'altro thumbnail

4. 7508 livello di fine dungeo si aumenta di livello di 1 se finisci la partita altrimenti non si aumenta se la interrompi. il contratto 7508 è indipendnete dai protocolli rmrk? chiedi a Steven. la 7508 è uno sc a parte che da un attributo all nft parent +1 che deve essere autoaccettato. se è cosi, allora si deve fare l'inherit di 7508 ai parent oppure è completamente indipendente? chiedi a steven. forse devi mettere l'autoaccettazione dell'attributo di livello giocatore (che sale di piu 1)

5. come si legge la 7508 lato server? e posso scegliere un livello inferiorer? si ma lato server non preoccuparti
6. 




## DUBBI

è previsto il nesting di child? cioè child di child? se sì, verifica chi può farlo, cioè fai uno script per vedere se 
l'owner di un parent che ha un childA si nesta un'altro child (childB) sotto al childA che già ha
:
## DOMANDE

1. rivediti i catalog, se sono 4 e hai 16 contratti item, puoi aggiungere per ogni catalog 4 contract item ciascuno?


## da fare in testing

1. inserire tutti gli asset
    `${C.BASE_IPFS_URI}/timeSquad/full/0001ryker.json`,

## da fare in production

1. elimina l'import aggiuntivo nei cataloghi dopo che hai finito di fare tutti i test!
2. inserisci run verify
