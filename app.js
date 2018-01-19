var img = [randomNumber(), randomNumber(), randomNumber()];

(function populateImages() {
    document.querySelectorAll(".card-img-top").forEach((img, index) => {
        img.src = `http://lorempixel.com/600/600/people/${img[index]}/`
    })
}) ();

(function checkForDuplicates() {
    while(img[1] === img[0]) {
        img[1] = randomNumber()
    }
    while(img[2] === img[0] || img[2] === img[1]) {
        img[2] = randomNumber()
    }
}) ();

function randomNumber() {
    return Math.ceil(Math.random() * 10)
}