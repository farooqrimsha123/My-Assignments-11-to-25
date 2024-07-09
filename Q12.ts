// Greetings:Start with the array you used in Excerise 11,But instead of just printing each person's name,print a message to them.The text of each message should be the same but each message should be personalized with the person's name.

let members: string[] =['rabia','faiza','rimsha','mehak','hina'];
let message: string='kl shadi h ksi ki:';
for(let i=0; i<members.length; i++){
    console.log(message+members[i]);
}

