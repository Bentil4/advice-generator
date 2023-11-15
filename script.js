const idNumber = document.querySelector(".id")
const message = document.querySelector(".message");
const dice = document.querySelector(".dice")

const adviceQuote = async() => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json();
    idNumber.textContent = `Advice # ${data.slip.id}`;
    message.textContent = data.slip.advice;
    console.log(data);
}

adviceQuote()

dice.addEventListener("click", adviceQuote)