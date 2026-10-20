const termek = {
  id: 3,
  nev: "Monitor",
  ar: 54990,
  cimkek: ["4K", "27 col"],
  raktaron: true,
};
const szamok = [5, 3, 8, 3, 1, 8, 5, 9, 1, 5];

//1.feladat
const szov = JSON.stringify(termek);
console.log(szov);
console.log(typeof szov);

//2.feladat
console.log(JSON.stringify(termek, null, 2));

//3.feladat
const szoveg = '{"nev":"Webkamera","ar":12990,"cimkek":["Full HD","USB"]}';

const terme = JSON.parse(szoveg);
console.log(terme.nev);
console.log(terme.cimkek[1]);
console.log(terme.ar + 1);

//4.feladat
const felhasznalo = {
  nev: "Anna",
  jelszo: undefined,
  kor: 17,
  koszon() {
    return "Szia!";
  },
};

const ujszov = JSON.stringify(felhasznalo);
console.log(ujszov);

const vissza = JSON.parse(ujszov);

console.log(`Eredeti kulcsok: ${Object.keys(felhasznalo).length}`);
console.log(`Visszaalakított kulcsok: ${Object.keys(vissza).length}`);

//5.feladat
const termekMásolat = { ...termek, cimkek: [...termek.cimkek] };
termekMásolat.cimkek.push("HDMI");
console.log(`Eredeti címkék: ${termek.cimkek.join(", ")}`);
console.log(`Másolat címkék: ${termekMásolat.cimkek.join(", ")}`);

//6.feladat
const keszlet = new Map();
keszlet.set("Egér", 12);
keszlet.set("Monitor", 3);
keszlet.set("Kábel", 40);

console.log(keszlet.get("Monitor"));
console.log(keszlet.has("Billentyűzet"));
console.log(keszlet.size);

//7.feladat
const keszle = new Map([
  ["Egér", 12],
  ["Monitor", 3],
  ["Kábel", 40],
]);
keszle.delete("Kábel");
keszle.set("Monitor", keszle.get("Monitor") + 2);
for (const [termek, mennyeg] of keszle) {
  console.log(`${termek}: ${mennyeg}`);
}

//8.feladat
const arak = { alma: 450, korte: 690, szilva: 520 };

const arakMap = new Map(Object.entries(arak));
console.log("Map:");
for (const [gyumolcs, ar] of arakMap) {
  console.log(`${gyumolcs}: ${ar}`);
}

arakMap.set("barack", 790);

const arakObj = Object.fromEntries(arakMap);
console.log("Objektum:");
console.log(arakObj);

//9.feladat
console.log(new Set(szamok).size);
const uniqueNumbers = [...new Set(szamok)];
console.log(uniqueNumbers);

//10.feladat
const latogatok = new Set();
latogatok.add("Anna");
latogatok.add("Béla");
latogatok.add("Anna");
latogatok.add("Csilla");
latogatok.add("Béla");

console.log(`Látogatók száma: ${latogatok.size}`);
console.log(`Dávid járt-e az oldalon? ${latogatok.has("Dávid")}`);

latogatok.delete("Béla");
console.log(`Set látogatók: ${[...latogatok]}`);

//11.feladat
const a = new Date("2026-09-07");
const napNevek = [
  "vasárnap",
  "hétfő",
  "kedd",
  "szerda",
  "csütörtök",
  "péntek",
  "szombat",
];

console.log(a.getFullYear());
console.log(a.getMonth() + 1);
console.log(a.getDate());
console.log(napNevek[a.getDay()]);

//12.feladat
function formaz(datum) {
  const ev = datum.getFullYear();
  const honap = datum.getMonth() + 1;
  const nap = datum.getDate();
  return `${ev}.${honap.toString().padStart(2, "0")}.${nap.toString().padStart(2, "0")}`;
}

console.log(formaz(new Date("2026-03-05")));
console.log(formaz(new Date("2026-12-24")));

//13.feladat
const d1 = new Date("2026-09-01");
const d2 = new Date("2026-12-24");
const kulonbseg = d2 - d1;
const napok = Math.floor(kulonbseg / (1000 * 60 * 60 * 24));
console.log(napok);

//14.feladat
console.log(
  -2.7,
  Math.round(-2.7),
  Math.floor(-2.7),
  Math.ceil(-2.7),
  Math.trunc(-2.7),
);
const kerekített = Number((3.14159).toFixed(2));
console.log(kerekített, typeof kerekített);

//15.feladat

function korlatoz(x, min, max) {
  return Math.min(Math.max(x, min), max);
}

korlatoz(15, 0, 10);
korlatoz(-3, 0, 10);
korlatoz(7, 0, 10);

//16.feladat
//Írj egy veletlen(min, max) függvényt, amely egy véletlen egész számot ad vissza min és max között (mindkét határt beleértve). Ellenőrizd 1000 kockadobással (veletlen(1, 6)): írd ki, hogy minden dobás 1 és 6 közé esett-e, és hogy mind a hat érték előfordult-e.

function veletlen(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

veletlen(1, 6);

//console.log("Kockadobások:");
const dobások = [];
for (let i = 0; i < 1000; i++) {
  dobások.push(veletlen(1, 6));
}
console.log(dobások);

const mindenErett = dobások.every((d) => d >= 1 && d <= 6);
console.log(`Minden dobás 1 és 6 közé esett: ${mindenErett}`);

const elofordult = [1, 2, 3, 4, 5, 6].every((n) => dobások.includes(n));
console.log(`Mind a hat érték előfordult: ${elofordult}`);

//17.feladat
//Írd ki, mely érdeklődési körök közösek Anna és Béla között, melyek csak Annáé, és hány különböző érdeklődési kör van összesen kettejüknél.

const anna = ["zene", "foci", "programozás", "olvasás"];
const bela = ["foci", "kosár", "programozás", "főzés"];

const közös = anna.filter((kör) => bela.includes(kör));
console.log(`Közös érdeklődési körök: ${közös.join(", ")}`);

const csakAnna = anna.filter((kör) => !bela.includes(kör));
console.log(`Csak Annáé: ${csakAnna.join(", ")}`);

const összes = [...new Set([...anna, ...bela])];
console.log(`Összes különböző érdeklődési kör: ${összes.length}`);

//18.feladat
const json = `[{"vevo":"Anna","termek":"Egér","db":2,"ar":6990},{"vevo":"Béla","termek":"Kábel","db":5,"ar":1990},{"vevo":"Anna","termek":"Kábel","db":1,"ar":1990},{"vevo":"Csilla","termek":"Egér","db":1,"ar":6990}]`;

const rendelesek = JSON.parse(json);
let teljesErtek = 0;
const termekDarabok = new Map();
const vevoErtekek = new Map();

for (const rendeles of rendelesek) {
  const osszErtek = rendeles.db * rendeles.ar;
  teljesErtek += osszErtek;

  termekDarabok.set(
    rendeles.termek,
    (termekDarabok.get(rendeles.termek) ?? 0) + rendeles.db,
  );

  vevoErtekek.set(
    rendeles.vevo,
    (vevoErtekek.get(rendeles.vevo) ?? 0) + osszErtek,
  );
}

console.log(`Összesen: ${teljesErtek} Ft`);
for (const [termek, db] of termekDarabok) {
  console.log(`${termek}: ${db} db`);
}
for (const [vevo, ertek] of vevoErtekek) {
  console.log(`${vevo}: ${ertek} Ft`);
}

//19.feladat
const szo = "A kutya ugat, a macska nyávog. A kutya fut, a macska alszik, a kutya eszik.";

const szavak = szo
  .toLowerCase()
  .replace(/[.,!?;:]/g, "")
  .split(/\s+/)
  .filter(Boolean);

const gyakorisag = new Map();
for (const szo of szavak) {
  gyakorisag.set(szo, (gyakorisag.get(szo) ?? 0) + 1);
}

const top3 = [...gyakorisag.entries()].sort((a, b) => b[1] - a[1]).slice(0, 3);

console.log(top3.map(([szo, db]) => `${szo}: ${db}`).join(" "));

//20.feladat
const ma = new Date(2026, 9, 20); // 2026. október 20.
const termekek = [
  { nev: "Tej", lejarat: new Date(2026, 9, 22) },
  { nev: "Sajt", lejarat: new Date(2026, 10, 15) },
  { nev: "Joghurt", lejarat: new Date(2026, 9, 26) },
  { nev: "Kenyér", lejarat: new Date(2026, 9, 19) },
];

const lejaroTermekek = termekek
  .map((termek) => {
    const kulonbseg = Math.ceil((termek.lejarat - ma) / (1000 * 60 * 60 * 24));
    return {
      nev: termek.nev,
      napok: kulonbseg,
    };
  })
  .filter((termek) => termek.napok <= 7 && termek.napok >= -7)
  .sort((a, b) => a.napok - b.napok);

for (const termek of lejaroTermekek) {
  console.log(
    termek.napok < 0
      ? `${termek.nev}: lejárt`
      : `${termek.nev}: ${termek.napok} nap`,
  );
}

console.log(JSON.stringify(lejaroTermekek.map((termek) => termek.nev)));
