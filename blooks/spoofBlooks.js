(() => {
    if(document.location.pathname !== "/blooks") return;
    Array.prototype.slice.call(document.getElementsByClassName("styles__lockedBlook___3oGaX-camelCase")
        ).forEach(element => {
            element.classList.remove("styles__lockedBlook___3oGaX-camelCase")
            let parentBlook = element.parentElement.id.replaceAll("-", " ")
            let parentBlook2 = parentBlook.replaceAll("_", "'")
            let rarity = blacket.blooks[parentBlook2].rarity
            let color = blacket.rarities[rarity].color
            element.parentElement.appendChild(jQuery.parseHTML(`<div class="styles__blookText___3AMdK-camelCase" style="background-color: ${color};">1</div>`)[0])
        }
    )

    Array.prototype.slice.call(document.getElementsByClassName("fas fa-lock styles__blookLock___3Kgua-camelCase")).forEach(element => element.remove())
})();
