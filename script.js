let rows = 4;
let pattern = "";

for (let n = 1; n <= rows; n++){
    for (let space = 1; space <= rows - n; space++){
    pattern += " ";
}

for (let num = 1; num <= 2 * n - 1; num++){
    pattern += "*";
}
pattern += "\n"
}
console.log(pattern);