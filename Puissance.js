
// Exemple 1
function pow (x,n) {
    // Condition de terminaison : toute x élevée à la puissance 1 est x
    if (n == 1) {
        return x;
    }else {
    // Appel à la fonction récursive
    return n* pow (x,n-1);
}
}

// Exemple 2
function LeapYear(year) {
    if (year % 400 === 0) {
        return true; // Année bissextile
    } else if (year % 100 === 0) {
        return false; //  une année n'est pas bissextile
    } else if (year % 4 === 0) {
        return true; // Année bissextile
    } else {
        return false; // une année n'est pas bissextile
    }
}

// Exemple 3
function fibonacci(n) {
    // Cas de base : si n est 0 ou 1, retourner n (0 ou 1)
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    // Appel à la fonction récursive
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Exemple 4
function ticketPricing() {
    // Demander l'âge à l'utilisateur et le prix
    let age = parseInt(prompt("Entrez votre âge :"));

    let price;

    // Déterminer le prix du billet en fonction de l'âge
    if (age <= 12) {
        price = 10;
    } else if (age >= 13 && age <= 17) {
        price = 15;
    } else if (age >= 18) {
        price = 20;
    } else {
        alert("Veuillez entrer un âge valide."); 
        return ticketPricing();
    }

    // Afficher le prix du billet
    alert(`Le prix du billet est de ${price} $.`);
}



