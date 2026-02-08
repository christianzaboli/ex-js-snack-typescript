import "./style.css";

let dataFromAPI: unknown = new Promise((resolve, reject) => {
  setTimeout(() => {
    let number = Math.random();
    if (number > 0.5) {
      resolve("Peek A Boo");
    } else reject("upsi dupsi");
  }, 3000);
});

if (typeof dataFromAPI === "string") console.log(dataFromAPI.toUpperCase());
if (typeof dataFromAPI === "number") console.log(dataFromAPI * 2);
if (typeof dataFromAPI === "boolean") console.log(dataFromAPI ? "Si" : "No");
if (!dataFromAPI) console.log("Il dato è vuoto");
if (Array.isArray(dataFromAPI)) console.log(dataFromAPI.length);
if (dataFromAPI instanceof Promise) {
  dataFromAPI
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.error(err));
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Just some TypeScript Snacks!</h1>

    <p class="read-the-docs">
      Open up the console to check some logs
    </p>
  </div>
`;
