let bandNumber = 0

const takeNumber = function (band) {
    bandNumber++
    console.log(bandNumber, band)
}

const scum = takeNumber("Galactic Scum") // This prints 1. Galactic Scum

const under = takeNumber("Underdogs") // This prints 2. Underdogs
