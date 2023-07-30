export function getBase64(file: File) {
    return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
}

export function getBlob(file: File){
    return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();

        reader.readAsArrayBuffer(file);
        reader.onload = () => resolve(new Blob([reader.result]));
        reader.onerror = (error) => reject(error);
    });
}
