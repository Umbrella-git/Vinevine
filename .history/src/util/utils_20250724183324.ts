// 获取assets静态资源
export const getAssetsFile = (url: string) => {
  console.log(url);
  console.log(new URL(`../assets/img/main_img/${url}`, import.meta.url).href);
  return new URL(`../assets/img/main_img/${url}`, import.meta.url).href;
};
