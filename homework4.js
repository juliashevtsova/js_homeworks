function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function checkProbabilityTheory(count) {
    let evenCount = 0;

    for (let i = 0; i < count; i++) {
        const randomNumber = getRandomInt(100, 1000); 
        //console.log(randomNumber);
                if (randomNumber % 2 === 0) {
            evenCount++;
        }
    }

    const oddCount = count - evenCount;

    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Не парних чисел: ${oddCount}`);
    console.log(`Відсоток парних до не парних: ${(evenCount / count * 100).toFixed(2)}% / ${(oddCount / count * 100).toFixed(2)}%`);
}

checkProbabilityTheory(5); 
