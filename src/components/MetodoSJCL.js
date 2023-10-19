import sjcl from 'sjcl';

export function encryptMessage(message, password) {
    try {
        const cipherText = sjcl.encrypt(password, message);
        return cipherText;
    } catch (error) {
        console.error('Error al encriptar el mensaje:', error);
        return null;
    }
}

export function decryptMessage(encryptedMessage, password) {
    try {
        const decryptedText = sjcl.decrypt(password, encryptedMessage);
        return decryptedText;
    } catch (error) {
        console.error('Error al desencriptar el mensaje:', error);
        return null;
    }
}
