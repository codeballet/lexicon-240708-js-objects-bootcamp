/////////////
// Bibblan //
/////////////

// 1
// let bookObject = {
//     title: "treasury of folklore seas & rivers",
//     author: "deedee chainey",
//     numPages: 192,
// };

// console.log(bookObject);

// 2
// let bookArray = [
//     {
//         title: "treasury of folklore seas & rivers",
//         author: "DeeDee Chainey",
//         numPages: 192,
//     },
//     {
//         title: "learning chinese characters",
//         author: "alison matthews",
//         numPages: 383,
//     },
//     {
//         title: "the calculus lifesaver",
//         author: "adrian banner",
//         numPages: 728,
//     },
// ];

// console.log(bookArray);

// 3
// function searchLibrary(books, searchTerm) {
//     console.log(`\nLooking for book title: "${searchTerm}"`);
//     let result = [];

//     books.forEach((book) => {
//         let titleArray = book.title.split(" ");
//         if (titleArray.includes(searchTerm)) {
//             result.push(book);
//         }
//     });

//     if (result.length > 0) {
//         return result;
//     } else {
//         return null;
//     }
// }

// console.log("Found these books: \n", searchLibrary(bookArray, "the"));

//////////////////////
// Letter Frequency //
//////////////////////

function letterFrequency(str) {
    let frequency = {};
    for (letter of str) {
        if (frequency[letter]) {
            // letter already exists, increment count
            frequency[letter] += 1;
        } else {
            // letter not recorded, start counting
            frequency[letter] = 1;
        }
    }
    return frequency;
}

// let stringToParse = "ni talar bra latin";
// console.log(`\nLetter frequency in: "${stringToParse}"`);
// console.log(letterFrequency(stringToParse));

///////////////////
// User Register //
///////////////////

// Imported global variable 'users'

// Filter by Country
// function filterByCountry(users, country) {
//     let filteredUsers = [];
//     users.forEach((user) => {
//         if (user.nat === country) {
//             filteredUsers.push(user);
//         }
//     });
//     return filteredUsers;
// }

// country = "DE";
// console.log(`Filtered list of users with nationality "${country}":`);
// console.log(filterByCountry(users, country));

// Get list of emails
// function getEmails(users) {
//     let userEmails = [];
//     users.forEach((user) => {
//         userEmails.push(user.email);
//     });
//     return userEmails;
// }

// Reformat emails

function newEmail(user) {
    return `${user.name.last}.${user.name.first}@evilcorp.${user.nat}`
        .toLowerCase()
        .replace(/\s/g, "");
}

for (user of users) {
    console.log(newEmail(user));
}
