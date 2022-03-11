const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

// function that takes name and a property (prop) as arguments
function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        console.log(contacts[i]);
        // check if name is an actual contact's firstName
        if (name === contacts[i].firstName) {
            // check if the given property (prop) is a property of that contact
            if (contacts[i].hasOwnProperty(prop)) {
                // if both are true, return the "value" of that property
                return contacts[i][prop];
            } else if (prop !== contacts[i][prop]) {
                // if prop does not correspond to any valid properties of a contact found to match name
                return "No such property";
            }
        }
    }
    // if name does not correspond to any contacts
    return "No such contact";
}

lookUpProfile("Akira", "likes");