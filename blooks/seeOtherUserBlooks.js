(() => {
    if(document.location.pathname !== "/blooks") return;
    blacket.requests.get(`/worker/user/${prompt('Which user\'s blooks would you like to see?')}`, (req) => {
        if(req.error) {
            alert('Invalid user or session!');
        } else {
            blacket.user.blooks = req.user.blooks;
            blacket.packBlooks.forEach((blook) => {
                let formatted = blook.replaceAll('\'', "_");
                let formatted2 = formatted.replaceAll(' ', '-');
                let rarity = blacket.blooks[blook].rarity;
                let color = blacket.rarities[rarity].color;
                let num = blacket.user.blooks[blook];
                let blookElement = $(`#${formatted2}`)[0];
                if(Object.keys(blacket.user.blooks).includes(blook)) {
                    blookElement.appendChild(jQuery.parseHTML(`<div class="styles__blookText___3AMdK-camelCase" style="background-color: ${color};">${num}</div>`)[0]);
                    blookElement.firstChild.classList.remove('styles__lockedBlook___3oGaX-camelCase');
                    blookElement.children[1].remove();
                } else {
                    blookElement.firstChild.classList.add('styles__lockedBlook___3oGaX-camelCase');
                    if(blookElement.lastChild.classList.contains('styles__blookText___3AMdK-camelCase')) {
                        blookElement.lastChild.remove();
                    };
                    $(`#${formatted2}`).append('<i class="fas fa-lock styles__blookLock___3Kgua-camelCase" aria-hidden="true"></i>');
                }
            })
        }
    })
})();