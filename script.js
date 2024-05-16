// q=1Create a simple phone book application functionality using JavaScript objects. Your application should
//  allow users to add new contacts, search for contacts by name, update existing contacts, and delete contacts.
// Implement the following functionalities:
// a) Add a new contact:  Allow users to add a new contact by providing their name, phone number, 
// and email address.
// b) Search for a contact: Allow users to search for a contact by entering their name. If the contact
//  is found, display their details (name, phone number, email). If not found, display a message 
// indicating that the contact does not exist.
// c) Update a contact: Allow users to update the phone number and email address of an existing
//  contact by providing their name and the updated information.
// d) Delete a contact: Allow users to delete a contact by entering their name.*/



let phoneBook = {
    contacts: [],
    addContact: function(name, phoneNumber, email) {
        let user = {
            name: name,
            phoneNumber: phoneNumber,
            email: email
        };
        this.contacts.push(user);
        console.log(`${name} added as a new contact.`);
    },
    searchContact: function(name) {
        let found = this.contacts.find(contact => contact.name === name);
        if (found) {
            console.log(`Contact: ${found.name}, Phone: ${found.phoneNumber}, Email: ${found.email}`);
        } else {
            console.log(`Contact '${name}' not found.`);
        }
    },
    updateContact: function(name, phoneNumber, email) {
        let contact = this.contacts.find(contact => contact.name === name);
        if (contact) {
            contact.phoneNumber = phoneNumber;
            contact.email = email;
            console.log(`Contact '${name}' updated.`);
            console.log(`Updated details: Phone - ${phoneNumber}, Email - ${email}`);
        } else {
            console.log(`Contact '${name}' not found.`);
        }
    },
    deleteContact: function(name) {
        let index = this.contacts.findIndex(contact => contact.name === name);
        if (index !== -1) {
            this.contacts.splice(index, 1);
            console.log(`Contact '${name}' deleted.`);
        } else {
            console.log(`Contact '${name}' not found.`);
        }
    }
};

phoneBook.addContact("Deepti", "1234567890", "deeptig@navgurukul.com");
phoneBook.addContact("Raja", "9876543210", "Raja@navgurukul.com");

phoneBook.searchContact("Deepti");
phoneBook.searchContact("Divya");

phoneBook.updateContact("Raja", "5555555555", "Raja@navgurukul.org");
phoneBook.searchContact("Raja");

phoneBook.deleteContact("Raja");
phoneBook.searchContact("Raja");
