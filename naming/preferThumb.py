import os
import json

def invert_preferThumb(directory):
    for root, dirs, files in os.walk(directory):
        for filename in files:
            if filename.endswith(".json"):
                filepath = os.path.join(root, filename)
                
                try:
                    # Apri e leggi il contenuto del file JSON
                    with open(filepath, 'r', encoding='utf-8') as file:
                        data = json.load(file)
                    
                    # Controlla se "preferThumb" è presente nel dizionario
                    if "preferThumb" in data:
                        # Inverti il valore di "preferThumb"
                        data["preferThumb"] = not data["preferThumb"]
                        
                        # Stampa le modifiche per verifica
                        print(f"Would update '{filename}' in '{root}' to 'preferThumb': {data['preferThumb']}")
                        
                        # Scrivi il nuovo contenuto del file JSON
                        with open(filepath, 'w', encoding='utf-8') as file:
                            json.dump(data, file, indent=4)
                            
                except json.JSONDecodeError:
                    print(f"Error decoding JSON from '{filepath}'. File might be corrupted or not formatted properly.")
                except IOError as e:
                    print(f"Error accessing file '{filepath}': {e}")

# Sostituisci il percorso qui sotto con il percorso effettivo dei tuoi file JSON
directory_path = "C:\\Users\\raffa\\Documents\\ethDavide\\AGE_OF_CHRONOS\\AGE_OF_CHRONOS\\metadata\\item"
invert_preferThumb(directory_path)
