

const btn = document.getElementById('btn');
const input = document.getElementById('input');
const outputText = document.getElementById('outputText');
const translateFrom = document.getElementById('translateFrom');
const translateTo = document.getElementById('translateTo');

btn.addEventListener('click', async () => {
    if (input.value === "") {
        alert("Input field is empty");
    } else {
        const translation = await translate(input.value, translateFrom.value, translateTo.value);
        outputText.textContent = translation;
    }
});

async function translate(text, fromLang, toLang) {
    console.log(fromLang,toLang)
    const apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${fromLang}|${toLang}`;
    const res = await fetch(apiUrl);
    const data = await res.json();
     console.log(data)
    if (data.responseData && data.responseData.translatedText) {
        return data.responseData.translatedText;
    } else {
        return "Translation not found";
    }
}
