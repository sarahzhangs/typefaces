// Function to update the count of typefaces
function updateTypefaceCount() {
    const visibleCards = document.querySelectorAll('.typeface-grid .card:not(.hidden)').length;
    // Update the text content of the <p> element in the header
    document.querySelector('main header p').textContent = `${visibleCards} Typefaces`;
}

// Initialize the count on page load
updateTypefaceCount();

document.querySelectorAll('.button-group button').forEach(button => {
    button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        
        // Remove 'active' class from all buttons
        document.querySelectorAll('.button-group button').forEach(btn => btn.classList.remove('active'));
        
        // Add 'active' class to the clicked button
        this.classList.add('active');
        
        // Filter cards
        document.querySelectorAll('.typeface-grid .card').forEach(card => {
            const tags = card.getAttribute('data-tags').split(' ');

            if (filter === 'all' || tags.includes(filter)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });

        // Update the count after filtering
        updateTypefaceCount();
    });
});

// Image swap on hover functionality
document.querySelectorAll('.card-img').forEach(img => {
    const originalSrc = img.src;
    const hoverSrc = img.getAttribute('data-hover');

    img.addEventListener('mouseover', () => {
        img.src = hoverSrc;
    });

    img.addEventListener('mouseout', () => {
        img.src = originalSrc;
    });
});

document.getElementById('logo').addEventListener('click', function() {
    location.reload();
  });
