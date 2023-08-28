const displayInput = document.querySelector('input[name="display"]');
const btn = document.querySelectorAll('input[type="button"]');

btn.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.value !== 'AC' && btn.value !== 'DE' && btn.value !== '=') {
            displayInput.value += btn.value;
        } else if (btn.value === 'AC') {
            displayInput.value = ''; 
        } else if (btn.value === 'DE') {
            displayInput.value = displayInput.value.slice(0, -1); 
        } else if (btn.value === '=') {
            try {
                let resultado = eval(displayInput.value);
                displayInput.value = resultado;    
            } catch (error) {
                displayInput.value = 'Erro'
            }
              
        }
    });
});