const os = require('node:os');




console.log("El sistema operativo es: ",os.platform());



console.log("La version actual es: ",os.release());



console.log("La memoria libre es: ",(os.freemem()/10734718)," Gigabytes");




console.log("La memoria total es: ",(os.totalmem()/10734718), " Gigabytes");



