import { ARWEAVE_GATEWAY_URL, IPFS_GATEWAY_URL } from "@/lib/constants";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

 
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
  }

export function getBase64(file: File) {
    return new Promise<any>((resolve, reject) => {
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = () => resolve((reader.result || ''));
        reader.onerror = (error) => reject(error);
    });
}

export function getBlob(file: File){
    return new Promise<Blob>((resolve, reject) => {
        const reader = new FileReader();

        reader.readAsArrayBuffer(file);
        reader.onload = () => resolve(new Blob([reader.result || '']));
        reader.onerror = (error) => reject(error);
    });
}

export function  sanitizeDStorageUrl  (url: string) {
    const ipfsGateway = `${IPFS_GATEWAY_URL}/`
    const arweaveGateway = `${ARWEAVE_GATEWAY_URL}/`
    if (!url) {
      return url
    }
  
    return url
      .replace(/^Qm[1-9A-Za-z]{44}/gm, `${ipfsGateway}/${url}`)
      .replace('https://ipfs.io/ipfs', ipfsGateway)
      .replace('https://ipfs.infura.io/ipfs', ipfsGateway)
      .replace('ipfs://', ipfsGateway)
      .replace('ipfs://ipfs/', ipfsGateway)
      .replace('ar://', arweaveGateway)
  }

  export const trimify = (value: string): string => value?.trim()