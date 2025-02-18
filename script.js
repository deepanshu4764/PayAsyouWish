document.getElementById('decision-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const form = e.target;
    const answers = Array.from(form.elements)
        .filter(el => el.tagName === 'SELECT')
        .map(select => select.value);

    // Simple decision logic
    const yesCount = answers.filter(answer => answer === 'yes').length;
    const result = document.getElementById('result');

    if (yesCount >= 2) {
        result.textContent = "Yes, this pricing model might work well for you!";
    } else {
        result.textContent = "No, this pricing model may not be a good fit.";
    }
});
