// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guestArray : string[] = ["laiba" , "ali" , "fatima", "aish"];
let canNotAttend : string = "aish";
 
let newGuest: string = "hiba"
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
console.log(guestArray)

guestArray.map((items) =>
    console.log(`Dear ${items}, I found a bigger dinner table so i am invited more people.`)
);
let guestBeg : string = "adiba"
guestArray.unshift(guestBeg);
console.log(guestArray)

// part 3
let middleGuest : string = "rani"
let middleindex = guestArray.length/3 
guestArray.splice(middleindex,3,middleGuest)
console.log(guestArray)
 
// part 4
guestArray.push("sawera")
console.log(guestArray)

// part 5
guestArray.map((items) =>
console.log(`Dear ${items}, You are invited in the more list on dinner`));
