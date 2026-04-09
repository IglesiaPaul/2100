// main.js - Fonctions communes à tout le site

// Mapping des catégories (version étendue)
function getCategoryLabel(cat) {
    const labels = {
        'travail': '👔 Travail',
        'ecologie': '🌿 Écologie',
        'sante': '🏥 Santé',
        'education': '📚 Éducation',
        'logement': '🏠 Logement',
        'democratie': '🗳️ Démocratie',
        'economie': '💰 Économie',
        'international': '🌍 International',
        'outremer': '🏝️ Outre-mer',
        'migrations': '🚶 Migrations',
        'defense': '🛡️ Défense',
        'europe': '🇪🇺 Europe',
        'numerique': '💻 Numérique',
        'medias': '📺 Médias',
        'agriculture': '🌾 Agriculture',
        'energie': '⚡ Énergie',
        'egalite': '🤝 Égalité',
        'transports': '🚆 Transports'
    };
    return labels[cat] || '📌 Thème';
}

// Mapping des couleurs par catégorie
function getCategoryColor(cat) {
    const colors = {
        'travail': '#e74c3c',
        'ecologie': '#2b9e4a',
        'sante': '#3498db',
        'education': '#9b59b6',
        'logement': '#f39c12',
        'democratie': '#1abc9c',
        'economie': '#e67e22',
        'international': '#2980b9',
        'outremer': '#16a085',
        'migrations': '#d35400',
        'defense': '#2c3e50',
        'europe': '#3b5998',
        'numerique': '#34495e',
        'medias': '#e84393',
        'agriculture': '#27ae60',
        'energie': '#f1c40f',
        'egalite': '#ff6b6b',
        'transports': '#3498db'
    };
    return colors[cat] || '#2b9e4a';
}

// Sauvegarde locale des mesures favorites/lues
function toggleSavedMeasure(measureId) {
    let saved = JSON.parse(localStorage.getItem('savedMeasures') || '[]');
    if (saved.includes(measureId)) {
        saved = saved.filter(id => id !== measureId);
    } else {
        saved.push(measureId);
    }
    localStorage.setItem('savedMeasures', JSON.stringify(saved));
    return saved.includes(measureId);
}

function isMeasureSaved(measureId) {
    const saved = JSON.parse(localStorage.getItem('savedMeasures') || '[]');
    return saved.includes(measureId);
}

// Fallback pour champs vides
function getFallbackText(field, fieldName) {
    if (field && field.trim() !== "") return field;
    return `ℹ️ Information "${fieldName}" à venir. Contribuez à l'amélioration du site !`;
}
