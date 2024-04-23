import os
import json

def sostituisci_parola_chiave(cartella_lavoro, parola_chiave_originale, nuova_parola_chiave):
    # Naviga all'interno della cartella specificata
    for filename in os.listdir(cartella_lavoro):
        if filename.endswith('.json'):
            file_path = os.path.join(cartella_lavoro, filename)
            
            # Leggi il contenuto del file JSON
            with open(file_path, 'r', encoding='utf-8') as file:
                data = json.load(file)
            
            # Converte il contenuto JSON in una stringa
            data_as_string = json.dumps(data)
            
            # Sostituisci la parola chiave
            data_as_string = data_as_string.replace(parola_chiave_originale, nuova_parola_chiave)
            
            # Riconverti la stringa in un oggetto JSON
            data = json.loads(data_as_string)
            
            # Scrivi il contenuto modificato nel file JSON
            with open(file_path, 'w', encoding='utf-8') as file:
                json.dump(data, file, indent=4, ensure_ascii=False)
                
            print(f"File '{filename}' aggiornato con la nuova parola chiave.")

# Esempio di come chiamare la funzione:
#sostituisci_parola_chiave('C:\\Users\\raffa\\Documents\\ethDavide\\AGE_OF_CHRONOS\\AGE_OF_CHRONOS\\metadata\\items\\luna','aria', 'luna')
sostituisci_parola_chiave('C:\\Users\\raffa\\Documents\\ethDavide\\AGE_OF_CHRONOS\\AGE_OF_CHRONOS\\metadata\\items\\luna','Aria', 'Luna')
sostituisci_parola_chiave('C:\\Users\\raffa\\Documents\\ethDavide\\AGE_OF_CHRONOS\\AGE_OF_CHRONOS\\metadata\\items\\ryker','aria', 'ryker')
sostituisci_parola_chiave('C:\\Users\\raffa\\Documents\\ethDavide\\AGE_OF_CHRONOS\\AGE_OF_CHRONOS\\metadata\\items\\ryker','Aria', 'Ryker')
sostituisci_parola_chiave('C:\\Users\\raffa\\Documents\\ethDavide\\AGE_OF_CHRONOS\\AGE_OF_CHRONOS\\metadata\\items\\thaddeus','aria', 'thaddeus')
sostituisci_parola_chiave('C:\\Users\\raffa\\Documents\\ethDavide\\AGE_OF_CHRONOS\\AGE_OF_CHRONOS\\metadata\\items\\thaddeus','Aria', 'Thaddeus')