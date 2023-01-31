(() => {
    if(document.location.pathname !== "/stats") return;
    blacket.user.blooks = blacket.blooks;
    $(".styles__headerBlookContainer___36zY5-camelCase").click()
    Object.keys(blacket.blooks).forEach((blook) => {
        $(`#${blook.replaceAll(" ", "-").replaceAll("'", "_")}`).unbind("click");
        $(`#${blook.replaceAll(" ", "-").replaceAll("'", "_")}`).click(() => {
            $(".arts__modal___VpEAD-camelCase").remove();
            $(".styles__blook___1R6So-camelCase")[0].src = blacket.blooks[blook].image;
            $(".styles__blook___1R6So-camelCase")[1].src = blacket.blooks[blook].image;
        });
    });
})();