function progress(percent) {
  return function () {
    return new Promise((resolve) => {
      resolve(percent);
    });
  };
}
