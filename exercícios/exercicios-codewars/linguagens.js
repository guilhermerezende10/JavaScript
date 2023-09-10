function greet(language) {
	const arrLinguagens = [ 
      ["english", "Welcome"]
    , ["czech", "Vitejte"]
    , ["danish", "Velkomst"]
    , ["dutch", "Welkom"]
    , ["estonian", "Tere tulemast"]
    , ["finnish", "Tervetuloa"]
    , ["flemish", "Welgekomen"]
    , ["french", "Bienvenue"]
    , ["german", "Willkommen"]
    , ["irish", "Failte"]
    , ["italian", "Benvenuto"]
    , ["latvian", "Gaidits"]
    , ["lithuanian", "Laukiamas"]
    , ["polish", "Witamy"]
    , ["spanish", "Bienvenido"]
    , ["swedish", "Valkommen"]
    , ["welsh", "Croeso"]
    ]
    var varReturn = ""

    arrLinguagens.forEach(idioma => {
        if(idioma[0] == language){
            varReturn = idioma[1]
        }
    })
    varReturn == "" ? varReturn = arrLinguagens[0][1] : null

    return varReturn
}

console.log(greet("welsh"))