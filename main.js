export function main(dtoIn) {
  const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;

  const MALE_NAMES = [
    "Jan", "Petr", "Josef", "Pavel", "Martin",
    "Jakub", "Lukáš", "Tomáš", "Ondřej", "Jiří",
    "Karel", "Marek", "Michal", "Václav", "Radek",
    "Roman", "Daniel", "Aleš", "Filip", "David",
    "Vratislav", "Jaroslav", "Milan", "Stanislav", "Vladimír"
  ];

  const FEMALE_NAMES = [
    "Jana", "Petra", "Kateřina", "Lucie", "Marie",
    "Eva", "Hana", "Tereza", "Monika", "Lenka",
    "Alena", "Barbora", "Veronika", "Markéta", "Anna",
    "Kristýna", "Zuzana", "Michaela", "Adéla", "Iveta",
    "Jitka", "Dana", "Helena", "Renata", "Gabriela"
  ];

  const MALE_SURNAMES = [
    "Novák", "Svoboda", "Novotný", "Dvořák", "Černý",
    "Procházka", "Kučera", "Veselý", "Horák", "Němec",
    "Marek", "Pospíšil", "Pokorný", "Jelínek", "Král",
    "Růžička", "Beneš", "Fiala", "Sýkora", "Doležal",
    "Zeman", "Kolář", "Kříž", "Navrátil", "Čermák"
  ];

  const FEMALE_SURNAMES = [
    "Nováková", "Svobodová", "Novotná", "Dvořáková", "Černá",
    "Procházková", "Kučerová", "Veselá", "Horáková", "Němcová",
    "Marková", "Pospíšilová", "Pokorná", "Jelínková", "Králová",
    "Růžičková", "Benešová", "Fialová", "Sýkorová", "Doležalová",
    "Zemanová", "Kolářová", "Křížová", "Navrátilová", "Čermáková"
  ];

  const WORKLOAD_OPTIONS = [10, 20, 30, 40];

  function randomChoice(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
  }

  function generateBirthdate(minAge, maxAge) {
    const nowMs = Date.now();
    const minMsAgo = minAge * MS_PER_YEAR;
    const maxMsAgo = maxAge * MS_PER_YEAR;
    const randomMsAgo = minMsAgo + Math.random() * (maxMsAgo - minMsAgo);
    const birthdateMs = nowMs - randomMsAgo;
    return new Date(birthdateMs).toISOString();
  }

  const count = dtoIn.count;
  const minAge = dtoIn.age.min;
  const maxAge = dtoIn.age.max;

  const result = [];

  for (let i = 0; i < count; i++) {
    const gender = Math.random() < 0.5 ? "male" : "female";

    const name =
      gender === "male"
        ? randomChoice(MALE_NAMES)
        : randomChoice(FEMALE_NAMES);

    const surname =
      gender === "male"
        ? randomChoice(MALE_SURNAMES)
        : randomChoice(FEMALE_SURNAMES);

    const birthdate = generateBirthdate(minAge, maxAge);
    const workload = randomChoice(WORKLOAD_OPTIONS);

    result.push({
      gender,
      birthdate,
      name,
      surname,
      workload
    });
  }

  return result;
}

