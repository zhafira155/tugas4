function filterProduct(category, el) {
    document.querySelectorAll('.kartu').forEach(card => {
        if (category === 'all') {
            card.style.display = "block";
        } else {
            card.style.display = card.classList.contains(category) ? "block" : "none";
        }
    });
    document.querySelectorAll('.btn').forEach(btn => {
        btn.classList.remove('bg-green-700', 'text-white');
        btn.classList.add('border', 'border-gray-300');
    });

    el.classList.add('bg-green-700', 'text-white');
    el.classList.remove('border');
}