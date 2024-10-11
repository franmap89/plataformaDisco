function toggleFavorite(icon) {
    if (icon.classList.contains('text-gray-400')) {
        icon.classList.remove('text-gray-400');
        icon.classList.add('text-yellow-500'); // Color estrella llena
    } else {
        icon.classList.remove('text-yellow-500');
        icon.classList.add('text-gray-400'); // Color estrella vacía
    }
}