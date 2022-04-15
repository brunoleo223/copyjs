function copyDivToClipboard(id) {
    const range = document.createRange();
    const el = document.getElementById(`code${id}`);
    const code = el.getElementsByTagName('code')[0];
    const button = el.getElementsByTagName('button')[0];

    button.innerText = "COPYING...";
    button.classList.remove('copy')

    range.selectNode(code);
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text

    if(document.execCommand("copy")){
        window.getSelection().removeAllRanges();// to deselect
        setTimeout(() => {
            button.innerText = "COPIED!";
            button.classList.add('copy')
        }, 1000)
    } else {
        console.log('n foi')
    }
}