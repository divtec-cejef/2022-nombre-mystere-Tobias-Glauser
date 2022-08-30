/**
* Jeu du nombre mystère
* @author  Tobias Glauser
* @version 0.1
* @since   2022-08-30 (date de création)
*/

// Main IIFE (Immediately-Invoked Function Expression, se prononce "iffy")
(function main() {
    'use strict';

    /**
     * Retourne un nombre entier aléatoire compris entre min et max
     * @param min
     * @param max
     * @returns {number}
     */
    function tireNombre(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const NB_MIN = 1;
    const NB_MAX = 100;

    const nbMystere = tireNombre(NB_MIN,NB_MAX);
    let nbEssais = 0;
    let reponse = 0;
    let message = `Le nombre à deviner est compris entre ${NB_MIN} et ${NB_MAX}.`;

    do {
        reponse = parseInt( prompt(message) );
        nbEssais++;
        if (reponse === nbMystere) {
            alert(`Vous avez trouvé après ${nbEssais} essais.`);
            return;
        }

        if (reponse > nbMystere) {
            message = `C'est moins`;
        } else {
            message = `C'est plus`;
        }
    } while (true);

}()); // main IIFE
