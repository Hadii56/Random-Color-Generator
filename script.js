const getcolor = () => {
    const randomnumber = Math.floor(Math.random() * 16777215);
    const randomcolor = "#" + randomnumber.toString(16)
    console.log(randomnumber, randomcolor)
    document.body.style.backgroundColor = randomcolor;
    document.getElementById("color").innerText = randomnumber
}
document.getElementById("btn").addEventListener(
    "click",
    getcolor
)
getcolor()
