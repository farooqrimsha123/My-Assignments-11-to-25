// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

let guest_list : string [] = ['sana','ali', 'bina','hina'];
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\n\nWe invited you on dinner tomorrow.\n\n Thank You\n') 
}    
let not_present : string = 'ali';
let new_guest : string = 'rayan';
guest_list[1] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\n\nWe invited you on dinner tomorrow.\n\n Thank You\n') 
}    
console.log(`Mr.${not_present} will not coming tomorrow dinner`)

