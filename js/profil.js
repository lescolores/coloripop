/* =========================================
   PROFIL.JS 
   Gère les interactions des pages de profil
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. GESTION DES SOUS-ONGLETS (Uniquement pour dashboard.html)
    // Cette fonction permet de basculer entre "Bibliothèque" et "Buddy Color"
    window.changerSousOngletDirect = function(id) {
        // Cacher tous les sous-panneaux
        document.querySelectorAll('.sous-panneau').forEach(p => p.classList.remove('actif'));
        // Afficher le bon
        const cible = document.getElementById('sous-' + id);
        if(cible) cible.classList.add('actif');

        // Gérer l'état visuel des boutons d'onglets
        document.querySelectorAll('.onglet-sub').forEach(o => o.classList.remove('actif'));
        const ongletCible = document.getElementById('onglet-' + id);
        if(ongletCible) ongletCible.classList.add('actif');
    };

    // 2. CHOISIR UN PLAN D'ABONNEMENT (Uniquement pour abonnement.html)
    window.choisirPlan = function(plan) {
        // Retirer la classe 'actuel' de toutes les cartes
        document.querySelectorAll('.carte-plan').forEach(c => c.classList.remove('actuel'));
        
        // Ajouter la classe à la carte cliquée
        // On utilise event.currentTarget pour cibler la div parent cliquée
        if (event && event.currentTarget) {
            event.currentTarget.classList.add('actuel');
        }

        // Mettre à jour le badge dans la sidebar
        const badge = document.getElementById('badge-plan');
        if (badge) {
            if (plan === 'premium') {
                badge.textContent = '✨ Premium';
                badge.classList.add('premium');
            } else {
                badge.textContent = 'Gratuit';
                badge.classList.remove('premium');
            }
        }
    };

});