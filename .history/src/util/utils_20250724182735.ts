// 获取assets静态资源
export const getAssetsFile = (url: string) => {
  console.log(url);
  console.log(new URL(`../assets/images/` + url, import.meta.url).href);
  return new URL(`../assets/images/${url}`, import.meta.url).href;
};
