export type Dipendete = {
  nome: string;
  cognome: string;
  annoNascita: number;
  sesso: "m" | "f";
  anniDiServizio: number[];
  emailAziendale: readonly [string];
  contratto: "indeterminato" | "determinato" | "freelance";
  livelloEsperienza: "Junior" | "Mid" | "Senior";
};
