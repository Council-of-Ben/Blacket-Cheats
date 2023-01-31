(() => {
    if(document.location.pathname !== "/stats") return;
    $("div:contains(Blooks Unlocked)")[9].parentElement.children[1].innerHTML = `${parseInt(prompt('How many blooks do you want?'))} / 238 `;
})();