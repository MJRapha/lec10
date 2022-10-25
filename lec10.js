const btnAddContact = document.getElementById('add-contact');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const contactsDiv = document.getElementById('contacts');

//initial load:
let contacts = [];

//string
const strContactsFromDisk = localStorage.getItem('contacts');

// contacts = [מידע שמור] 
if (strContactsFromDisk != null) {
    //parse as array of objects:
    const contactsFromDisk = JSON.parse(strContactsFromDisk);
    contacts = contactsFromDisk;
} else {
    console.log("No Contacts yet");
}

class Contact {
    name;
    phone;

    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}

// react to btnAddContact:
btnAddContact.addEventListener('click', () => {
    //get the input values:
    const name = nameInput.value;
    const phone = phoneInput.value;

    //object with the input values:
    const contact = new Contact(name, phone);

    contacts.push(contact);

    //save Array<Contact> to disk
    localStorage.setItem('contacts', JSON.stringify(contacts));

    contactsDiv.innerHTML += `Name: ${contact.name} Phone:  ${contact.phone} <br>`;
    //show contacts to the user:
    /* contactsDiv.innerHTML = '';
    contacts.forEach(c => {
        contactsDiv.innerHTML += `Name:${c.name} Phone: ${c.phone} <br>`;
    }); */
});
