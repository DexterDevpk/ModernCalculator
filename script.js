let menuOpen = false;

function toggleMenu() {
    const submenu = document.getElementById('submenu');
    menuOpen = !menuOpen; // Toggle menu state
    submenu.style.display = menuOpen ? 'block' : 'none';
}

// Close the menu if clicked outside of it
document.addEventListener('click', function(event) {
    const submenu = document.getElementById('submenu');
    const dots = document.querySelector('.dots');
    
    // Check if the click was outside the submenu and the dots button
    if (menuOpen && !submenu.contains(event.target) && !dots.contains(event.target)) {
        submenu.style.display = 'none';
        menuOpen = false; // Update menu state
    }
});

function toggleScientificMode() {
    const scientificSection = document.getElementById('scientificSection');
    scientificSection.style.display = scientificSection.style.display === 'none' ? 'block' : 'none';
    document.getElementById('conversionSection').style.display = 'none';
    document.getElementById('currencySection').style.display = 'none';
}

function toggleUnitConversion() {
    const unitSection = document.getElementById('conversionSection');
    unitSection.style.display = unitSection.style.display === 'none' ? 'block' : 'none';
    document.getElementById('scientificSection').style.display = 'none';
    document.getElementById('currencySection').style.display = 'none';
}

function toggleCurrencyConversion() {
    const currencySection = document.getElementById('currencySection');
    currencySection.style.display = currencySection.style.display === 'none' ? 'block' : 'none';
    document.getElementById('conversionSection').style.display = 'none';
    document.getElementById('scientificSection').style.display = 'none';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

// Unit Conversion Functionality
function convertUnits() {
    const value = parseFloat(document.getElementById('unitInput').value);
    const conversionType = document.getElementById('unitSelect').value;
    let result;

    switch (conversionType) {
        case 'm-to-km':
            result = value / 1000;
            break;
        case 'km-to-m':
            result = value * 1000;
            break;
        case 'c-to-f':
            result = (value * 9 / 5) + 32;
            break;
        case 'f-to-c':
            result = (value - 32) * 5 / 9;
            break;
    }

    document.getElementById('unitResult').innerText = `Result: ${result}`;
}

// Currency Conversion Functionality
function convertCurrency() {
    const amount = parseFloat(document.getElementById('currencyInput').value);
    const conversionType = document.getElementById('currencySelect').value;
    let result;

    switch (conversionType) {
        case 'usd-to-eur':
            result = amount * 0.85; // Example conversion rate
            break;
        case 'eur-to-usd':
            result = amount * 1.18; // Example conversion rate
            break;
    }

    document.getElementById('currencyResult').innerText = `Result: ${result}`;
}
