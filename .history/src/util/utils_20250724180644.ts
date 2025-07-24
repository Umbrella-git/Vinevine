// 获取assets静态资源
export const getAssetsFile = (url: string) => {
  console.log(url);
  return new URL(`@/${url}`, import.meta.url).href;
};
