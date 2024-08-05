document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('notes-form');
    const noteInput = document.getElementById('note');
    const resultDiv = document.getElementById('result');

    let notas = [];
    let totalNotas = 0;
    let somaNotas = 0;
    let maiorNota = -Infinity;
    let menorNota = Infinity;
    let aprovados = 0;
    let reprovados = 0;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const nota = parseFloat(noteInput.value);
        
        if (nota === 0) {
            displayResults();
            return;
        }

        notas.push(nota);
        totalNotas++;
        somaNotas += nota;

        if (nota > maiorNota) {
            maiorNota = nota;
        }

        if (nota < menorNota) {
            menorNota = nota;
        }

        if (nota >= 7) {
            aprovados++;
        } else {
            reprovados++;
        }

        // Reset the input field
        noteInput.value = '';
        noteInput.focus();
    });

    function displayResults() {
        if (totalNotas > 0) {
            const mediaNotas = somaNotas / totalNotas;
            resultDiv.innerHTML = `
                <h2>Resultados:</h2>
                <p><strong>Maior nota:</strong> ${maiorNota.toFixed(2)}</p>
                <p><strong>Menor nota:</strong> ${menorNota.toFixed(2)}</p>
                <p><strong>Total de notas inseridas:</strong> ${totalNotas}</p>
                <p><strong>Média das notas:</strong> ${mediaNotas.toFixed(2)}</p>
                <p><strong>Aprovados (nota >= 7):</strong> ${aprovados}</p>
                <p><strong>Reprovados (nota < 7):</strong> ${reprovados}</p>
            `;
        } else {
            resultDiv.innerHTML = '<p>Nenhuma nota foi inserida.</p>';
        }
    }
});
