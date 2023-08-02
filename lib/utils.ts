import { ARWEAVE_GATEWAY_URL, IPFS_GATEWAY_URL } from "@/lib/constants";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import BigNumber from "bignumber.js";


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

export function getBlob(file: File) {
  return new Promise<Blob>((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsArrayBuffer(file);
    reader.onload = () => resolve(new Blob([reader.result || '']));
    reader.onerror = (error) => reject(error);
  });
}

export function sanitizeDStorageUrl(url: string) {
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

export const base64toBuff = (data) => {
  var arr = data.split(',');
  var buffer = Buffer.from(arr[1], 'base64');
  // new Blob(buffer)
  let array = new Uint8Array(buffer, 0, buffer.length);
  return Array.from(array);
};

// Base64 转 Blob
export const dataURLtoBlob = (dataurl) => {
  var arr = dataurl.split(',') //分割为数组，分割到第一个逗号
  let mime = arr[0].match(/:(.*?);/)[1]//获取分割后的base64前缀中的类型
  let bstr = window.atob(arr[1])
  let n = bstr.length
  let u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });//文件类型格式
}

export const toAmount = (s, decimals) => {
  let value = new BigNumber(s)
  let divide = new BigNumber(Math.pow(10, decimals))
  return value.dividedBy(divide).toFixed(4)
}

export const bignumberPlus = (add1, add2, decimals) => {
  let value1 = new BigNumber(add1)
  let value2 = new BigNumber(add2)
  let divide = new BigNumber(Math.pow(10, decimals))
  return value1.plus(value2).dividedBy(divide).toFixed(4)
}
export const shuffleArray = <T>(array: T[] = []): T[] => {
  const shuffledArray = [...array]; // 创建一个原始数组的副本，以防止修改原始数组

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // 交换元素位置
  }

  return shuffledArray;
}
