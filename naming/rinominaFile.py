import os
import json

def invert_preferThumb(cartella):
    for root, dirs, files in os.walk(cartella):
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
                        original_value = data["preferThumb"]
                        data["preferThumb"] = not data["preferThumb"]
                        
                        # Scrivi il nuovo contenuto del file JSON
                        with open(filepath, 'w', encoding='utf-8') as file:
                            json.dump(data, file, indent=4)
                        
                        print(f"Updated '{filename}' in '{root}' from '{original_value}' to '{data['preferThumb']}'")
                
                except json.JSONDecodeError:
                    print(f"Error decoding JSON from '{filepath}'. File might be corrupted or not formatted properly.")
                except IOError as e:
                    print(f"Error accessing file '{filepath}': {e}")

# Imposta qui il percorso della cartella dove si trovano i file JSON
indirizzo_iniziale = r"C:\\Users\\raffa\\Documents\\ethDavide\\AGE_OF_CHRONOS\\AGE_OF_CHRONOS\\metadata"
invert_preferThumb(indirizzo_iniziale)

