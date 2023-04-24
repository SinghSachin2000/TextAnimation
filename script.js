let content = ["S", "a", "c", "h", "i", "n", " ", "S", "i", "n", "g", "h"];
let cont2 = ["a", " ", "W", "e", "b", " ", "D", "e", "v", "e", "l", "o", "p", "e", "r"];

function setname() {
    for (let i = 0; i < content.length; i++) {
        setTimeout(() => {
            document.querySelector("#secondText").innerHTML += content[i];
        }, i * 200);
    }
    setTimeout(() => {
        document.querySelector("#secondText").innerHTML = "";
        for (let j = 0; j < cont2.length; j++) {
            setTimeout(() => {
                document.querySelector("#secondText").innerHTML += cont2[j];
            }, j * 200);
        }
        setTimeout(() => {
            document.querySelector("#secondText").innerHTML = "";
            setname();
        }, cont2.length * 300);
    }, content.length * 300);
}
setTimeout(setname, 1500);