PROGRAMMAZIONE WEB ANNO ACCADEMICO 2016/17

PROGETTO REALIZZATO DA:

Francesco Calise 090286 francesco.calise@studenti.unicam.it

Antonio Villani 090099 antonio.villani@studenti.unicam.it

########################################################

 Il file .env è inserIto all'interno del git.
 Per cambiare il database modificare la riga DB_URI con il collegamento al vostro database.
 
 L'ottimizzazione è gestita per l'utilizzo da smartphone
 
########################################################

Link della presentazione su youtube:

https://www.youtube.com/watch?v=sYJh6m3IWIU&t=231s
 
 
########################################################
 
Link dell'app deployata su Heroku:

https://pianodistudi.herokuapp.com/

########################################################

Link ToDo list on Trello:

https://trello.com/b/LJxIdR7o/progetto-programmazione-web

########################################################

Link SlideShare:

https://www.slideshare.net/secret/K3UzNKLQGL6ofu

########################################################

Procedura per far partire il programma in locale:
Scaricare l'archivio, estrarre il contenuto e dalla route della cartella aprire il terminale e digitare:
-nodemon server.js

Nota: all'interno del file .env è già presente il collegamento al database. 
    La creazione di  un account da privilegi di amministratore è gestita manuale in quanto non è stata implementata nessuna funzione.
    account admin già presente nel database:
    username:admin  password:admin
    
########################################################

Descrizione dell'architettura ed organizzazione dei file:

-Look n Feel (in questa cartella è presente una rappresentazione grafica di tutte le viste dell'app)

-FlowChart (in questa cartella è presente il flow chart)

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
  
 
 ###################### GUIDA AL .ENV
 
DB_URI="collegamento a database

PORT="8080

SECRET="test      // parola utilizzata dal jwt

AMBIENTE="debug

scegliere tra :

    { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
    
    ogni livello include il livello precedente.
  
