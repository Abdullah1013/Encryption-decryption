function readFile() {
    var fileInput = document.getElementById('fileInput');
    var fileTextArea = document.getElementById('fileContent');
    var file = fileInput.files[0];

    if (file) {
        var reader = new FileReader();
        reader.onload = function (obj) {
            var content = obj.target.result;
            fileTextArea.value = content;
        };
        reader.readAsText(file);
    } else {
        fileTextArea.value = 'Please select a file.';
    }
}

function encpMsg() {
    const messageInput = document.getElementById('fileContent').value;
    const key = messageInput.length;

    let encryptedMessage = '';

    for (let i = 0; i < messageInput.length; i++) {
        const charCode = messageInput.charCodeAt(i);
        const encryptedCharCode = charCode + key;
        const encryptedChar = String.fromCharCode(encryptedCharCode);
        encryptedMessage += encryptedChar;
    }

    document.getElementById('encpMessage').value = encryptedMessage;
}

function decMsg() {
    const encryptedMessageInput = document.getElementById('fileContent').value;
    const key = encryptedMessageInput.length;

    let decryptedMessage = '';

    for (let i = 0; i < encryptedMessageInput.length; i++) {
        const charCode = encryptedMessageInput.charCodeAt(i);
        const decryptedCharCode = charCode - key;
        const decryptedChar = String.fromCharCode(decryptedCharCode);
        decryptedMessage += decryptedChar;
    }

    document.getElementById('encpMessage').value = decryptedMessage;
}

function saveFile() {
    const encryptedMessage = document.getElementById('encpMessage').value;

    // Prompt user for file name and location
    const fileName = prompt('Enter the file name:', 'encrypted_decrypted_text.txt');

    if (fileName) {
        const blob = new Blob([encryptedMessage], { type: 'text/plain' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = fileName;

        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}

