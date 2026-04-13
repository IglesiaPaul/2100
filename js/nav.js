// js/nav.js - Navigation unifiée pour tout le site
(function() {
    const navHtml = `
        <nav class="navbar">
            <div class="nav-container">
                <a href="index.html" class="logo">🌱 SOLARPUNK/France2100</a>
                <div class="nav-links">
                    <a href="index.html">Accueil</a>
                    <a href="index.html#allMeasuresLink">Toutes les mesures</a>
                    <a href="index.html#themesLink">Par thème</a>
                    <a href="chatbot.html">🤖 Chatbot</a>
                    <a href="quizz.html">📝 Quizz</a>
                    <a href="https://lafranceinsoumise.fr/le-programme/" target="_blank">Le programme</a>
                    <a href="a-propos.html">À propos</a>
                    <div class="dropdown">
                        <a href="#" class="dropbtn">🔬 Lab ▼</a>
                        <div class="dropdown-content">
                            <a href="budget.html">💰 Analyse budgétaire</a>
                            <a href="lab-hcc.html">🌡️ Confrontation HCC</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', navHtml);

    // Ajouter un peu de CSS pour le dropdown si pas déjà présent
    const style = document.createElement('style');
    style.textContent = `
        .dropdown {
            position: relative;
            display: inline-block;
        }
        .dropdown-content {
            display: none;
            position: absolute;
            background-color: white;
            min-width: 200px;
            box-shadow: 0 8px 16px rgba(0,0,0,0.1);
            z-index: 1;
            border-radius: 8px;
        }
        .dropdown-content a {
            color: #2c3e50 !important;
            padding: 0.75rem 1rem;
            text-decoration: none;
            display: block;
            text-align: left;
        }
        .dropdown-content a:hover {
            background-color: #f1f1f1;
        }
        .dropdown:hover .dropdown-content {
            display: block;
        }
    `;
    document.head.appendChild(style);
})();
