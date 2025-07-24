// 获取assets静态资源
export const getAssetsFile = (url: string) => {
  console.log(`@/${url}`);
  const a = new URL(`../../${url}`, import.meta.url).href;
  return new URL(`@/${url}`, import.meta.url).href;
};
