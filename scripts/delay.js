function delay(time) {
  return function (...args) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(...args);
      }, time);
    });
  };
}
