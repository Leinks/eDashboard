export function dataEncrpt (value: any) {
    try {
      return CryptoJS.AES.encrypt(JSON.stringify(value), import.meta.env.VITE_SECRET_KEY).toString();
    } catch (error) {
      console.log("🚀 ~ file: data-encrypt.js:9 ~ dataEncrpt ~ error:", error);
    }
  };