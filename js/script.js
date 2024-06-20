
setInterval(displayTime, 1000);

function displayTime() {
    const display = document.getElementsByTagName('h3')[0];
    const date = new Date();
    display.innerHTML = date.toLocaleString();    

}