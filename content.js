let elements = document.getElementsByTagName('*');

for (let i = 0; i < elements.length; i++) {
    let element = elements[i];

    for (let j = 0; j < element.childNodes.length; j++) {
        let node = element.childNodes[j];

        if (node.nodeType === 3) {
            let text = node.nodeValue;
            // list of some pronouns, with plural ones first
            let somePronouns = ["we", "you", "they", "he", "she", "it"]

            let replacedText = text.replace("I ", 'I, the koala, ');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}