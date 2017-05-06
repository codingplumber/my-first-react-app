function registerTeam(name) {
    var players = [];
    function addPlayer(playerName) {
        //come back in here at least 3 times
        players.push(playerName);
        players;
        name;
    }

    return addPlayer;
}

var AddPLayerGriffonsdoorFn = registerTeam('Griffonsdoor');

AddPLayerGriffonsdoorFn('Jesse'); //this function is our access into the closure (the gate to access the closure)
AddPLayerGriffonsdoorFn('Kevin');
AddPLayerGriffonsdoorFn('Jake');

var AddPlayerSlitherInFn = registerTeam('Slitherin');
AddPlayerSlitherInFn('Kaleigh');
AddPlayerSlitherInFn('Nick');
//AddPlayerSlitherInFn('Draco');
