 Il file .env è inseirto all'interno del git.
 per cambiare il database modificare la riga DB_URI con il collegamento al vostro database.
 
 L'ottimizzazione è gestita per l'utilizzo da smartphone
 
Link Heroku:
https://pianodistudi.herokuapp.com/

Procedura per far partire il programma in locale:
Scaricare l'archivio, estrarre il contenuto e dalla route della cartella aprire il terminale e digitare:
-nodemon server.js

Nota: all'interno del file .env è già presente il collegamento al database. 
    La creazione di  un accaunt da privilegi di amministratore è gestita manuale in quanto non è stata implementata nessuna funzione.
    account admin già presente nel database : username:admin  password:admin
Descrizione del architettura ed organizzazione dei file:
Route
 -Server (in questa cartella sono presenti tutti i file per la gestione del server)
  -function (in questa cartella sono presenti i file dove sono scritte le funzioni implementate lato server, le funzioni sono divisie in 
   in base a chi le può utilizzare)
  -models ( in questa cartella sono presenti tutti gli schemi esistenti per mongoDB)
  router.js ( in questo file ci sono tutte le api richiamate)
 -Client (in questa cartella sono presenti tutti i file per la gestione del client)
  -www
   -css (file css)
   -js (cartella dove è presente il codice js)
    -app ( file per la gestione principale di angular)
    -controller ( file con tutti i controller utilizzati)
   -templates (cartella contenenti tutti i file html)
server.js
.env
 
 Progetto realizzato da:
 Francesco Calise 090286 francesco.calise@studenti.unicam.it
 Antonio Villani 090099 antonio.villani@studenti.unicam.it
 
 
 
 ###################### GUIDA AL .ENV
 
DB_URI="collegamento a database
PORT="8080
SECRET="test      // parola utilizzata dal jwt
AMBIENTE="debug
scegliere tra :
    { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
    ogni livello include il livello precedente.
  
