(() => {
    if(document.location.pathname !== "/stats") return;
    blacket.user.perms.push('change_banner');
    $(".styles__headerBanner___3Uuuk-camelCase").click()
    Object.keys(blacket.banners).forEach((banner) => {
        $(`#${banner.replaceAll(" ", "-").replaceAll("'", "_")}`).unbind("click");
        $(`#${banner.replaceAll(" ", "-").replaceAll("'", "_")}`).click(() => {
            $(".arts__modal___VpEAD-camelCase").remove();
            $(".styles__headerBg___12ogR-camelCase").attr("src", blacket.banners[banner].image);
        });
    });
})();