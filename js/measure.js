// measure.js - Logique pour la page de détail des mesures

// Variables globales
let currentMeasure = null;
let allMeasures = [];

function initMeasurePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const mesureId = parseInt(urlParams.get('id'));
    
    if (!mesures || mesures.length === 0) {
        document.getElementById('measureContent').innerHTML = '<div class="error">❌ Base de données non chargée. Veuillez rafraîchir.</div>';
        return;
    }
    
    allMeasures = mesures;
    currentMeasure = allMeasures.find(m => m.id === mesureId);
    
    if (!currentMeasure) {
        document.getElementById('measureContent').innerHTML = '<div class="error">❌ Mesure non trouvée. ID invalide.</div>';
        return;
    }
    
    displayMeasure();
    displaySimilarMeasures();
    setupNavigation();
    setupSaveButton();
    updatePageMetadata();
}

function displayMeasure() {
    const container = document.getElementById('measureContent');
    const categoryColor = getCategoryColor(currentMeasure.categorie);
    
    // Badges supplémentaires
    let badges = '';
    if (currentMeasure.statut === 'mesure_cle') {
        badges += '<span class="badge badge-star">⭐ Mesure phare</span>';
    }
    
    const shareText = encodeURIComponent(currentMeasure.titre + " - " + currentMeasure.resume);
    const shareUrl = encodeURIComponent(window.location.href);
    const isSaved = isMeasureSaved(currentMeasure.id);
    
    container.innerHTML = `
        <div class="measure-header">
            <div class="measure-counter">📋 ${currentMeasure.id} / ${allMeasures.length}</div>
            <div class="measure-tag" style="background: ${categoryColor}20; color: ${categoryColor}">
                ${getCategoryLabel(currentMeasure.categorie)}
            </div>
            <div class="measure-badges">${badges}</div>
            <h1>${currentMeasure.titre}</h1>
            <button class="save-button ${isSaved ? 'saved' : ''}" id="saveMeasureBtn">
                ${isSaved ? '✓ Sauvegardé' : '📌 Sauvegarder cette mesure'}
            </button>
        </div>
        
        <div class="resume-box">${getFallbackText(currentMeasure.resume, 'résumé')}</div>
        
        <div class="section">
            <h2>📖 Pourquoi cette mesure ?</h2>
            <p>${getFallbackText(currentMeasure.explication, 'explication')}</p>
        </div>
        
        <div class="section">
            <h2>📊 Chiffre clé</h2>
            <div class="chiffre">${getFallbackText(currentMeasure.chiffre_cle, 'chiffre clé')}</div>
        </div>
        
        <div class="section">
            <h2>👤 Exemple concret</h2>
            <p>${getFallbackText(currentMeasure.exemple_concret, 'exemple concret')}</p>
        </div>
        
        <div class="section financement">
            <h2>💰 Financement</h2>
            <p>${getFallbackText(currentMeasure.financement, 'financement')}</p>
        </div>
        
        <div class="section">
            <h2>📢 Partager cette mesure</h2>
            <div class="share-buttons">
                <a href="https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}" class="share-btn share-twitter" target="_blank">🐦 Twitter</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${shareUrl}" class="share-btn share-facebook" target="_blank">📘 Facebook</a>
                <a href="https://wa.me/?text=${shareText}%20${shareUrl}" class="share-btn share-whatsapp" target="_blank">💬 WhatsApp</a>
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}" class="share-btn share-linkedin" target="_blank">🔗 LinkedIn</a>
                <button class="share-btn share-copy" id="copyLinkBtn">📋 Copier le lien</button>
            </div>
        </div>
    `;
    
    // Gestionnaire pour le bouton copier
    const copyBtn = document.getElementById('copyLinkBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(window.location.href);
            copyBtn.textContent = '✓ Lien copié !';
            setTimeout(() => { copyBtn.textContent = '📋 Copier le lien'; }, 2000);
        });
    }
}

function displaySimilarMeasures() {
    const container = document.getElementById('similarContent');
    if (!container) return;
    
    // Trouver 3 mesures similaires (même catégorie, hors mesure actuelle)
    const similar = allMeasures
        .filter(m => m.categorie === currentMeasure.categorie && m.id !== currentMeasure.id)
        .slice(0, 3);
    
    if (similar.length === 0) {
        container.innerHTML = '<p>Aucune mesure similaire trouvée.</p>';
        return;
    }
    
    container.innerHTML = similar.map(m => `
        <a href="mesure.html?id=${m.id}" class="similar-card">
            <div class="similar-tag">${getCategoryLabel(m.categorie)}</div>
            <h4>${m.titre}</h4>
            <p>${m.resume.substring(0, 80)}${m.resume.length > 80 ? '...' : ''}</p>
        </a>
    `).join('');
}

function setupNavigation() {
    const currentIndex = allMeasures.findIndex(m => m.id === currentMeasure.id);
    const prevMeasure = allMeasures[currentIndex - 1];
    const nextMeasure = allMeasures[currentIndex + 1];
    
    const navContainer = document.getElementById('measureNavigation');
    if (!navContainer) return;
    
    let navHtml = '<div class="measure-navigation">';
    if (prevMeasure) {
        navHtml += `<a href="mesure.html?id=${prevMeasure.id}" class="nav-prev">← ${prevMeasure.titre}</a>`;
    } else {
        navHtml += `<span class="nav-prev disabled">← Début de la liste</span>`;
    }
    
    if (nextMeasure) {
        navHtml += `<a href="mesure.html?id=${nextMeasure.id}" class="nav-next">${nextMeasure.titre} →</a>`;
    } else {
        navHtml += `<span class="nav-next disabled">Fin de la liste →</span>`;
    }
    navHtml += '</div>';
    
    navContainer.innerHTML = navHtml;
}

function setupSaveButton() {
    const saveBtn = document.getElementById('saveMeasureBtn');
    if (!saveBtn) return;
    
    saveBtn.addEventListener('click', () => {
        const isNowSaved = toggleSavedMeasure(currentMeasure.id);
        saveBtn.textContent = isNowSaved ? '✓ Sauvegardé' : '📌 Sauvegarder cette mesure';
        if (isNowSaved) {
            saveBtn.classList.add('saved');
        } else {
            saveBtn.classList.remove('saved');
        }
    });
}

function updatePageMetadata() {
    document.title = currentMeasure.titre + " - L'Avenir en commun";
    document.querySelector('meta[name="description"]').setAttribute('content', currentMeasure.resume);
}

// Initialisation
initMeasurePage();
