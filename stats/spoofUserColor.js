(() => {
    if(document.location.pathname !== "/stats") return;
    $('head').append('<script src="https://cdn.jsdelivr.net/npm/@jaames/iro@5"></script>')
    $('.styles__bottomContainer___3kOrb-camelCase').append('<div class=styles__right___13qxc-camelCase><div class=styles__statsContainer___QnrRB-camelCase><div class=styles__containerHeader___3xghM-camelCase><div class=styles__containerHeaderInside___2omQm-camelCase>Color Picker</div></div><div class=styles__topStats___3qffP-camelCase id="picker"></div></div></div>')
    setTimeout(() => {

        var colorPicker = new iro.ColorPicker("#picker", {
            // Set the initial color to pure red
            color: "#f00"
        });
        colorPicker.on('color:change', function(color) {
            // log the current color as a HEX string
            $('.styles__headerName___1GBcl-camelCase')[0].style.color  = color.rgbString;
        });
    }, 1000);
})();
