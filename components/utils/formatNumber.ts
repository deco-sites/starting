export function abbreviateNumber(number: number) {
    // Define os sufixos para milhares, milhões, bilhões, etc.
    const suffixes = ['', 'K', 'M', 'B', 'T'];

    // Divide o número por 1000 repetidamente até que fique abaixo de 1000
    let suffixIndex = 0;
    while (number >= 1000 && suffixIndex < suffixes.length - 1) {
        number /= 1000;
        suffixIndex++;
    }

    // Formata o número para ter no máximo 1 casa decimal
    const formattedNumber = number.toFixed(1);

    // Remove o '.0' se não for necessário
    const finalNumber = formattedNumber.replace(/\.0$/, '');

    // Adiciona o sufixo adequado
    return finalNumber + suffixes[suffixIndex];
}