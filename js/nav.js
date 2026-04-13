// js/nav.js - Navigation unifiée pour tout le site
(function() {
    const navHtml = `
        <nav class="navbar">
            <div class="nav-container">
                <a href="index.html" class="logo">🌱 L'Avenir en commun</a>
                <div class="nav-links">
                    <a href="index.html">Accueil</a>
                    <a href="index.html#allMeasuresLink">Toutes les mesures</a>
                    <a href="index.html#themesLink">Par thème</a>
                    <a href="chatbot.html">🤖 Chatbot</a>
                    <a href="quizz.html">📝 Quizz</a>
                    <a href="https://lafranceinsoumise.fr/le-programme/" target="_blank">Le programme</a>
                    <a href="a-propos.html">À propos</a>
                    <a href="budget.html" style="font-weight: bold;">💰 Budget</a>
                </div>
            </div>
        </nav>
    `;
    
    // Insérer la nav au début du body
    document.body.insertAdjacentHTML('afterbegin', navHtml);
})();
