function calculateTriangleArea() {
    let base = parseFloat(document.getElementById('base').value);
    let height = parseFloat(document.getElementById('height').value);
    let resultElement = document.getElementById('result');

    if (!isNaN(base) && !isNaN(height) && base >= 0 && height >= 0) {
        let area = (base * height) / 2;
        resultElement.textContent = "The area of the triangle is: " + area;
    } else {
        resultElement.textContent = "Error: Please enter valid values for base and height.";
    }
}