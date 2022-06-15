// Import du module readline
const readline = require('readline');

// Instanciation de Readline
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Tableau de contacts
let contacts = [

    {
        FirstName: "Ikrame",
        LastName: "AKALMOUS",
        Number: "0101010101"
    },
    {
        FirstName: "Prince",
        LastName: "Joseph",
        Number: "020202020"
    }];




function help() {

    rl.question('Hey Sir, i\'m your directory ! \n \n Enter /help for display my different command\n \n Otherwise simply enter a command for start using me \n\n There is the details of different commant available : \n \n /help : Display all the commands available \n\n /stop : Quit your loved directory \n\n /add : Add a new contact in your directory \n\n /list : list all the contacts you have in your loved directory \n\n /delete : Delete one of your contact by specifying his ID \n \n', function (command) {


        switch (command) {
            case '/list':
                list();
                break;
            case '/add':
                add();

            case '/help':
                help();
                // expected output: "Mangoes and papayas are $2.79 a pound."
                break;

            case '/stop':
                stop();

            case '/delete':
                deleted();
            default:
                console.log(`Sorry, Unkwown command  ${command}.`);
            //help();
        }
    })

}




function deleted() {

    contacts.forEach(function (item, index, array) {
        console.log(item, 'ID :', index);
    })
    rl.question('Quel est l\'ID du contact a supprimer ?', function (index) {
        if (contacts[index] == undefined) {
            console.log('\x1b[41m', `Le contact- ${index} n'existe pas.`);
            list();
            deleted();


        }
        else {
            contacts.splice(index, 1);
            console.log('Votre contact a été bien supprimé');
            console.log("voila la nouvelle liste");
            console.log(contacts);
            help();
        }


    })

}



function list() {

    console.log("Here is a list of your contacts : \n  ------------------------ \n \n")
    for (let i = 0; i < contacts.length; i++) {
        let contact = contacts[i];
        console.log("ID : " + i + " ==>" + contact.FirstName + ' ' + contact.LastName + '\n' + "phone: " + contact.Number + '\n');

    }

    help();
}



function stop() {
    rl.close;
    console.log('Your directory has been closed ');
    help();
}




function add() {

    var phone = /^[0][6][0-9]{8}$/;
    rl.question(' what is your First Name?', function (FirstName) {
        rl.question(' what is your Last Name?', function (LastName) {
            rl.question('What is your number ?', function (Number) {

                if (FirstName && LastName && Number) {


                    if (FirstName[0].toUpperCase() == FirstName[0] && LastName[0].toUpperCase() == LastName[0] && Number.match(phone)) {

                        const contact = { FirstName: FirstName, LastName: LastName, Number: Number };

                        // Ajout de la nouvelle ligne $
                        contacts.push(contact);

                        // Affichage du nouveau tableau
                        console.log(" Your contact has been aded");

                        console.log(contacts);




                    }

                    else if (!Number.match(phone)) {

                        console.log('\x1b[95%s\x1b[0m', 'Invalid phone number');
                        add();
                    }

                    else if (FirstName[0].toLocaleUpperCase() == false && LastName[0].toUpperCase() == false) {

                        console.log(" First name and Last name must start with an uppercase .. ");
                    }

                    else if (Number.length > 8) {
                        console.log('\x1b[95%s\x1b[0m', 'Phone number too long ... ')
                    }







                    rl.close();

                    help();
                }
            })
        })
    })



}

function Welcome() {
    console.log('Hey Sir, i\'m your directory ! \n \n Enter /help for display my different command\n \n Otherwise simply enter a command for start using me \n\n');
    help();
}


// fonction de démarrage
Welcome();







