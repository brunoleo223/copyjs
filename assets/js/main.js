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
        }, 500)
    } else {
        console.log('n foi')
    }
}

function actions(id, action){
    const el = document.getElementById(`code${id}`);
    const window = el.getElementsByClassName('window')[0];
    const body = document.querySelector('body');

    console.log(action)

    switch(action){
        case 'fullscreen':
            window.classList.add('fullscreen')
            body.style.overflowY = "hidden";
            break;

        case 'minimize':
            window.classList.remove('fullscreen')
            body.style.overflowY = "initial";
            break;
    }
}