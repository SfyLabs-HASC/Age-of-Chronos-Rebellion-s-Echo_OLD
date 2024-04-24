import os
import json

def invert_preferThumb(directory):
    # Percorri tutti i file nel directory specificato
    for filename in os.listdir(directory):
        if filename.endswith(".json"):
            filepath = os.path.join(directory, filename)
            
            # Apri e leggi il contenuto del file JSON
            with open(filepath, 'r', encoding='utf-8') as file:
                data = json.load(file)
            
            # Controlla se "preferThumb" è presente nel dizionario
            if "preferThumb" in data:
                # Inverti il valore di "preferThumb"
                data["preferThumb"] = not data["preferThumb"]
                
                # Scrivi il nuovo contenuto del file JSON
                with open(filepath, 'w', encoding='utf-8') as file:
                    json.dump(data, file, indent=4)
                    
            print(f"Updated '{filename}'")

# Sostituisci il percorso qui sotto con il percorso effettivo dei tuoi file JSON
directory_path = r"C:\Users\raffa\Documents\ethDavide\AGE_OF_CHRONOS\AGE_OF_CHRONOS\metadata"
invert_preferThumb(directory_path)
