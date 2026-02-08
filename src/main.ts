import "./style.css";

let dataFromAPI: unknown;

if (typeof dataFromAPI === "string") {
  // caso stringa
  console.log(dataFromAPI.toUpperCase());
} else if (typeof dataFromAPI === "number") {
  // caso numero
  console.log(dataFromAPI * 2);
} else if (typeof dataFromAPI === "boolean") {
  // caso booleano
  console.log(dataFromAPI ? "Si" : "No");
} else if (dataFromAPI === null) {
  // caso null
  console.log("Il dato è vuoto");
} else if (Array.isArray(dataFromAPI)) {
  // caso array
  console.log(dataFromAPI.length);
} else if (dataFromAPI instanceof Promise) {
  // caso promise
  dataFromAPI
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.error(err));
} else {
  console.log("Tipo non supportato");
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Just some TypeScript Snacks!</h1>

    <p class="read-the-docs">
      Open up the console to check some logs
    </p>
  </div>
`;
