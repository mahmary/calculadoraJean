// Variável para armazenar calculo atual 
let currentDisplay = '0';
const display = document.getElementById('display');

// Função para atualizar tela 
function updateDisplay() {
    display.textContent = currentDisplay;
}

// Função adicionar calculo
function appendToDisplay(value) {
    if (currentDisplay === '0' && value !== '.') {
        currentDisplay = value;
    } else {
        currentDisplay += value;
    }
    updateDisplay();
}

// Função para limpar calculos
function clearDisplay() {
    currentDisplay = '';
    updateDisplay();
}

// Função para calcular o resultado
function calculate() {
    try {
        // Substitui o símbolo de multiplicação para o JavaScript entender
        const expression = currentDisplay.replace(/×/g, '*');
        currentDisplay = eval(expression).toString();
        updateDisplay();
    } catch (error) {
        currentDisplay = 'calculo errado!! ';
        updateDisplay();
        setTimeout(clearDisplay, 5000);
    }
}