export default async function (file: File): Promise<string> {
  if (!file) {
    return '';
  }
  const result = await new Promise<string>((res, rej) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      res(reader.result as string);
    };
    reader.onerror = function (error) {
      rej(error);
    };
  });

  return result;
}
