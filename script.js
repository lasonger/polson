document.addEventListener('DOMContentLoaded', function () {
    const phrases = [
        "ужас",
        "хд",
        "талант",
        "имба",
        "согл",
        "урааа",
        "хвахвах бля",
        "пиздец граждане",
        "звапщзващ баля",
        "согласна",
        "та да",
        "имба ж",
        "да лютый лютый",
        "жоский",
        "еба",
        "пиздец",
        "жесть",
        "бля реально",
        "дефолт",
        "туда",
        "+++",
        "нада спать",
        "реально",
        "маладец",
        "да",
        "😍😍",
        "приключения",
        "жиза",
        "гений",
        "урааа",
        "празднуем",
        "+",
        "жоска",
    ];

    const generatedPhrase = document.getElementById('generatedPhrase');
    const generateButton = document.getElementById('generateButton');

    generateButton.addEventListener('click', function () {
        const randomIndex = Math.floor(Math.random() * phrases.length);
        generatedPhrase.textContent = phrases[randomIndex];
    });
});
