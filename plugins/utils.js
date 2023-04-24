import Vue from 'vue'

Vue.filter('abbreviate', function (text) {
    if (text.length > 3) {
        const palabras = text
            .replace("de", "")
            .replace("la", "")
            .replace("lo", "")
            .replace("le", "")
            .replace("del", "")
            .replace("a", "")
            .split(" ");
        if (palabras.length == 1) {
            let palabra = palabras[0];
            return palabra.charAt(0).toUpperCase() + palabra.charAt(1).toUpperCase() + palabra.charAt(2).toUpperCase();
        } else {
            const iniciales = palabras.map(palabra => palabra.charAt(0).toUpperCase());
            return iniciales.join("");
        }
    }
    else {
        return text.toUpperCase();
    }
})
