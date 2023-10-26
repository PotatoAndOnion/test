a = (n) => {
    s = 1
    for(let a = 1; a <= n; a++){
        s = s * a
    }console.log(s)
}
a(15)

function triangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let a = 1; a <= i; a++) {
            row += '*';
        }
        console.log(row);
    }
}

triangle(3);