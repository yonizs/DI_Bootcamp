const answer = prompt("Enter words seperated by commas:");
const words = answer.split(",").map(word => word.trim());

function starFrame(words) {
    let longest =0;

    for(const word of words) {
        if(word.length > longest) {
            longest = word.length;
        }
    }

    const border = "*".repeat(longest + 4);
    console.log(border);

    for (const word of words) {
        console.log("*" + word.padEnd(longest) + "*");
    }
    console.log(border);
}

starFrame(words);