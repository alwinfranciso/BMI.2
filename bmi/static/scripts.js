/*document.addEventListener('DOMContentLoaded', function() {
    const bmiElement = document.getElementById('bmi');
    if (bmiElement) {
        bmiElement.style.transition = 'opacity 1s';
        bmiElement.style.opacity = 0;
        setTimeout(() => {
            bmiElement.style.opacity = 1;
        }, 100);
    }
});*/
document.addEventListener('DOMContentLoaded', function() {
    const bmiElement = document.getElementById('bmi');
    const bmiBar = document.getElementById('bmi-bar');
    const bmiCategoryElement = document.getElementById('bmi-category');
    if (bmiElement && bmiBar && bmiCategoryElement) {
        const bmiValue = parseFloat(bmiElement.textContent);
        let barWidth = 0;
        let category = '';

        if (bmiValue < 18.5) {
            barWidth = 25; // Underweight
            category = 'Underweight';
        } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
            barWidth = 50; // Normal weight
            category = 'Healthy';
        } else if (bmiValue >= 25 && bmiValue < 29.9) {
            barWidth = 75; // Overweight
            category = 'Overweight';
        } else {
            barWidth = 100; // Obesity
            category = 'Obese';
        }

        bmiBar.style.width = barWidth + '%';
        bmiBar.textContent = bmiValue.toFixed(1);
        bmiCategoryElement.textContent = `You are ${category}.`;
    }
});
