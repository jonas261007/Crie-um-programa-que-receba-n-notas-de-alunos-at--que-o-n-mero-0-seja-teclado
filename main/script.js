document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('notes-form');
    const noteInput = document.getElementById('note');
    const resultDiv = document.getElementById('result');
    const calculateButton = document.getElementById('calculate');

    let notas = [];

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const nota = parseFloat(noteInput.value);
        
        notas.push(nota);
        noteInput.value = '';
        noteInput.focus();
    });

    calculateButton.addEventListener('click', displayResults);

    function getMaiorNota(notas) {
        return Math.max(...notas);
    }

    function getMenorNota(notas) {
        return Math.min(...notas);
    }

    function getTotalNotas(notas) {
        return notas.length;
    }

    function getMediaNotas(notas) {
        const somaNotas = notas.reduce((acc, nota) => acc + nota, 0);
        return somaNotas / notas.length;
    }

    function getAprovadosReprovados(notas) {
        const aprovados = notas.filter(nota => nota >= 7).length;
        const reprovados = notas.length - aprovados;
        return { aprovados, reprovados };
    }

    function displayResults() {
        if (notas.length > 0) {
            const maiorNota = getMaiorNota(notas);
            const menorNota = getMenorNota(notas);
            const totalNotas = getTotalNotas(notas);
            const mediaNotas = getMediaNotas(notas);
            const { aprovados, reprovados } = getAprovadosReprovados(notas);

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
