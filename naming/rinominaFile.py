import os
import shutil
import re

def rinomina_file(cartella, parola_chiave):
    # Compila un'espressione regolare che trova la parola chiave con eventuali underscore adiacenti
    regex = re.compile(rf"(_?){re.escape(parola_chiave)}(_?)")
    
    for root, dirs, files in os.walk(cartella):
        for filename in files:
            # Usa la regex per cercare e sostituire la parola chiave e gli underscore
            new_name = regex.sub(lambda m: '_', filename).strip('_').replace('__', '_')
            
            # Percorso completo del vecchio e del nuovo file
            old_file = os.path.join(root, filename)
            new_file = os.path.join(root, new_name)
            
            # Rinomina il file se il nuovo nome è diverso dall'originale
            if new_name != filename:
                shutil.move(old_file, new_file)
                print(f"Rinominato '{filename}' in '{new_name}'")

# Imposta qui il percorso della cartella e la parola chiave
indirizzo_iniziale = "C:\\Users\\raffa\\Documents\\ethDavide\\AGE_OF_CHRONOS\\AGE_OF_CHRONOS\\images"
parola_chiave = "thaddeus"

# Chiama la funzione
rinomina_file(indirizzo_iniziale, parola_chiave)
