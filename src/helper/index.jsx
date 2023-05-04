export const getVideoData = () => {
  return new Promise(async (resolve, reject) => {
    const res = await fetch("http:localhost:3000/api/videos");
    res
      .json()
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
