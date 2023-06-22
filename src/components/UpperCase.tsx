
export const UpperCase = (data: string) => {
const UpperFinal = data.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());


  return UpperFinal;
}

