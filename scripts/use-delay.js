Promise.resolve()
  .then(() => {
    console.log("[delay]", "step 1");
  })
  .then(delay(200))
  .then(() => {
    console.log("[delay]", "step 2");
  })
  .then(delay(200))
  .then(() => {
    console.log("[delay]", "step 3");
  })
  .then(delay(200))
  .then(() => {
    console.log("[delay]", "finished");
  });
