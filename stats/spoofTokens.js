(() => {
    if(document.location.pathname !== "/stats") return;
    $("div:contains(Tokens)")[14].parentElement.children[1].innerHTML = parseInt(prompt('How many tokens do you want?'));
})();