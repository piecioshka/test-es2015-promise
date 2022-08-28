function domClick() {
  return new Promise((resolve) => {
    window.addEventListener("click", (evt) => {
      resolve(evt.target);
    });
  });
}
