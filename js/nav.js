// js/nav.js - Navigation unifiée pour tout le site
(function() {
    const navHtml = `
        <nav class="navbar">
            <div class="nav-container">
                <a href="index.html" class="logo">🌱 SOLARPUNK 🇫🇷</a>
                <div class="nav-links">
                    <a href="index.html">Accueil</a>
                    <a href="index.html#allMeasuresLink">Toutes les mesures</a>
                    <a href="index.html#themesLink">Par thème</a>
                    <a href="chatbot.html">🤖 Chatbot</a>
                    <a href="quizz.html">📝 Quizz</a>
                    <a href="https://lafranceinsoumise.fr/le-programme/" target="_blank">Le programme</a>
                    <a href="a-propos.html">À propos</a>
                    <a href="lab.html" style="font-weight: bold;">🔬 Lab</a>
                </div>
            </div>
        </nav>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', navHtml);
})();
