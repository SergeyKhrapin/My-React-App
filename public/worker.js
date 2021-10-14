// this code runs in the worker thread and does not block other operations (interactions with UI etc.)

onmessage = function (e) {
  //   console.log("Worker: Message received from main script -", e.data);

  let i = 0;
  while (i < 5000000000) {
    i++;
  }
  const dateRaw = new Date(e.data);
  const date = `
    ${
      dateRaw.getMonth() + 1
    }/${dateRaw.getDate()}/${dateRaw.getFullYear()} ${dateRaw.getHours()}:${dateRaw.getMinutes()}:${dateRaw.getSeconds()}`;

  //   console.log("Calculation is finished", date);

  //   send some data as a response
  postMessage({
    date,
    timeStamp: e.data,
  });
};
