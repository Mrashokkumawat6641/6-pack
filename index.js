const zodiac = document.getElementById("zodiac")

const body = document.body;
const changeBackground = () => {
   switch (zodiac.value) {
    case "aries":
        body.style.backgroundColor = "#fc0303";
        break;
   
    default:
        break;
   }
}

let fruits =["apple", "banana", "cherry"]
let [first,...rest] = fruits;
console.log(rest.length)