(() => {
    if(document.location.pathname !== "/stats") return;
    badge = prompt('Which badge do you want?');
    if(!Object.keys(blacket.badges).includes(badge)) {
        alert('Invalid badge!');
    } else {
        // Using Blacket code in Blacket hacks is HILARIOUS!
        $(".styles__headerBadges___ffKa4-camelCase").append(`<div id="${badge.replaceAll(" ", "-")}" style="display: inline-block; z-index: 10; cursor: pointer; margin-right: 2px;"><img loading="lazy"src="${blacket.badges[badge].image}" style="width: 30px;display: inline-block; margin-left: 2.5px;"></div>`);
        $(`#${badge.replaceAll(" ", "-")}`).click(() => {
            $("body").append(`<div class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase"><div>${badge} Badge<br><br>${blacket.badges[badge].description}</div></div><div class="styles__holder___3CEfN-camelCase"><div class="styles__buttonContainer___2EaVD-camelCase"><div id="closeButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">Okay</div></div></div></div><input type="submit" style="opacity: 0; display: none;" /></form></div>`);
            $("#closeButton").click(() => {
                $(".arts__modal___VpEAD-camelCase").remove();
            });
        });
    };
})();