Promise.resolve()
  .then(progress(0))
  .then((percent) => console.log("[progress]", percent))

  .then(delay(1000))

  .then(progress(50))
  .then((percent) => console.log("[progress]", percent))

  .then(delay(1000))

  .then(progress(100))
  .then((percent) => console.log("[progress]", percent));
