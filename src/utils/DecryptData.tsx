

export function dataDecrypt (value: string) {
  try {
    const bytes = CryptoJS.AES.decrypt(value, import.meta.env.VITE_SECRET_KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (error) {
    console.log("🚀 ~ file: data-decrypt.js:9 ~ dataDecrypt ~ error:", error);
  }
};