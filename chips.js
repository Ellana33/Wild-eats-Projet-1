document.addEventListener("DOMContentLoaded", function() {
    // For chips in .chips__choice
    let choiceChips = document.querySelectorAll('.chips__choice .chip');
    choiceChips.forEach(function(chip) {
        chip.addEventListener("click", function() {
            choiceChips.forEach(function(innerChip) {
                innerChip.classList.remove('chip--active');
            });
            this.classList.add('chip--active');
        });
    });
});