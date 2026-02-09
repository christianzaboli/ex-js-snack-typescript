export type Dipendete = {
  nome: string;
  cognome: string;
  annoNascita: number;
  sesso: "m" | "f";
  anniDiServizio: number[];
  readonly emailAziendale: string;
  contratto: "indeterminato" | "determinato" | "freelance";
};

export type Developer = Dipendete & {
  livelloEsperienza: "Junior" | "Mid" | "Senior";
  linguaggi?: string[];
  certificazioni: string[];
};

export type ProjectManager = Dipendete & {
  teamSize: number | null;
  budgetGestito?: number;
  stakeholderPrincipali: string[];
};
export type Team = {
  nome: string;
  progettoAttuale: string | null;
  budget: number;
  membri: [ProjectManager, Developer, ...Developer[]];
};
