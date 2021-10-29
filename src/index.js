console.log(data);

// WRITE YOUR CODE BELOW!

const dogList = document.querySelector(".dogs-list")
const dogContainer = document.querySelector(".main__dog-section");

appendToElement = (element, parentElement) => parentElement.append(element)

function createElementWClass(element = "", className = "", innerText = "") {
    const tempEl = document.createElement(element);
    tempEl.classList.add(className);
    tempEl.innerText = String(innerText);
    return tempEl;
}

function createElementWOClass(element = "", innerText = "") {
    const tempEl = document.createElement(element);
    tempEl.innerText = String(innerText);
    return tempEl;
}

data.forEach(element => {
    const dogName = createElementWClass("li", "dogs-list__button", element.name)
    dogName.id = element.id
    appendToElement(dogName, dogList)
});


dogList.addEventListener("click", function (event) {
    event.preventDefault();
    let dogID = event.target.id - 1;
    mainDogCard(dogID)

})



function mainDogCard(i){
    dogContainer.innerHTML = "";
    const dogName = createElementWOClass("h2", data[i].name)
    appendToElement(dogName, dogContainer);

    const dogImage = createElementWOClass("img")
    dogImage.setAttribute("src", data[i].image);
    dogImage.setAttribute("width", 100)
    appendToElement(dogImage, dogContainer);

    const mainDogSection = createElementWClass("div", "main__dog-section__desc")
    appendToElement(mainDogSection, dogContainer)

    const dogBio = createElementWOClass("h3", "Bio")
    appendToElement(dogBio, mainDogSection)

    const dogBioText = createElementWOClass("p", data[i].bio)
    appendToElement(dogBioText, mainDogSection)

    const naughtyDog = createElementWOClass("p");
    const italicText = createElementWOClass("em", "Is naughty? ");
    const goodDogButton = createElementWOClass("button", "Good dog!");
    let naughty = ""
    if (data[i].isGoodDog === true){
        naughty = "No!"
    } else {
        naughty = "Yes!"
    }
    
    naughtyDog.append(italicText, naughty)
    dogContainer.append(naughtyDog, goodDogButton)

    function changeNaughtiness(naughtyPup) {
        naughtyDog.innerHTML = "";
        console.log(`Naughty value: ${naughty}`)
        if (naughtyPup === "Yes!") {
            console.log("If check = naughty is Yes!")
            naughty = "No!"
            console.log(naughty)
        } else if (naughtyPup === "No!"){
            console.log("If check = naughty is No!")
            naughty = "Yes!"
            console.log(naughty)
        };
        
        naughtyDog.append(italicText, naughty)
    }

    goodDogButton.addEventListener("click", function(){
        changeNaughtiness(naughty)
    });
}


mainDogCard()




/*if (naughty = "No!") {
    naughty = "Yes!"
}

else {
    naughty = "No!"
};
const isNaughty = naughty
naughtyDog.append(isNaughty)
*/





/*
data.forEach(element => {
    let dogNaughty = ""
    const dogName = document.createElement("h2");
    dogName.innerText = element.name
    appendToElement(dogName, dogContainer);

    const dogImage = document.createElement("img");
    dogImage.setAttribute("src", element.image);
    dogImage.setAttribute("width", 256)
    appendToElement(dogImage, dogContainer);

    const dogBio = document.createElement("h3");
    dogBio.innerText = "Bio"
    appendToElement(dogBio, dogContainer);

    const dogBioText = document.createElement("p");
    dogBioText.innerText = element.bio
    appendToElement(dogBioText, dogContainer);

    const isDogNaughty = document.createElement("p");
    if (element.isGoodDog = true) {
        dogNaughty = "no!"
    }
    else {
        dogNaughty = "yes!"
    };
    appendToElement(isDogNaughty, dogContainer);

    const isNaughty = document.createElement("em");
    isNaughty.innerText = "Is naughty?";
    isDogNaughty.innerText = isNaughty + " " + dogNaughty
    appendToElement(isNaughty, isDogNaughty)

    const goodDog = document.createElement("button");
    goodDog.innerText = "Good dog!"
    appendToElement(goodDog, dogContainer)

    const mainDogSection = document.createElement("div", "main__dog-section__desc");
    appendToElement(mainDogSection, dogContainer)
});
*/