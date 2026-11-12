const employees = [
  {
    id: 1,
    firstName: "Sara",
    lastName: "Alami",
    email: "sara@example.com",
    department: "Développement",
    salary: 9500,
    experience: {
      company: "TechSolutions",
      position: "Frontend Developer",
      years: 3,
    },
    skills: [
      { name: "JavaScript", level: "Avancé" },
      { name: "React", level: "Intermédiaire" },
    ],
  },
  {
    id: 2,
    firstName: "Haitam",
    lastName: "Nefal",
    email: "haitam@example.com",
    department: "Développement",
    salary: 9500,
    experience: {
      company: "TechSolutions",
      position: "Back-end Developer",
      years: 5,
    },
    skills: [
      { name: "PHP", level: "Avancé" },
      { name: "Laravel", level: "Intermédiaire" },
    ],
  },
  {
    id: 3,
    firstName: "Anouare",
    lastName: "Hamza",
    email: "anouare@example.com",
    department: "Développement",
    salary: 9500,
    experience: {
      company: "TechSolutions",
      position: "Back-end Developer",
      years: 2,
    },
    skills: [
      { name: "PHP", level: "Avancé" },
      { name: "Laravel", level: "Intermédiaire" },
    ],
  },
];

const employees_ist = document.getElementById("employees-list");
const search = document.getElementById("search");
const departmentFilter = document.getElementById("department-filter");
const emptyState = document.getElementById("empty-state");

const AffichageEmployee = (filtredEmployees) => {
  employees_ist.innerHTML = ``;

  if (filtredEmployees.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
    filtredEmployees.forEach((em) => {
      employees_ist.innerHTML += `
        <article class="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm" data-employee-id="${em.id}}
          <div class="flex items-start justify-between gap-4">
            <div class="flex min-w-0 items-center gap-3">
              <div class="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-100 font-bold text-brand-700">${em.firstName[0].toUpperCase()}${em.lastName[0].toUpperCase()}</div>
              <div class="min-w-0">
                <h3 class="truncate text-lg font-bold">${em.firstName} ${em.lastName}</h3>
                <p class="truncate text-sm text-slate-500">${em.email}</p>
              </div>
            </div>
            <span class="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">${em.department}</span>
          </div>
          <dl class="mt-5 grid grid-cols-2 gap-3 border-y border-slate-100 py-4 text-sm">
            <div><dt class="text-slate-500">Poste</dt><dd class="mt-1 font-semibold">${em.experience.position}</dd></div>
            <div><dt class="text-slate-500">Entreprise</dt><dd class="mt-1 font-semibold">${em.experience.position}</dd></div>
            <div><dt class="text-slate-500">Expérience</dt><dd class="mt-1 font-semibold">${em.experience.years} Years</dd></div>
            <div><dt class="text-slate-500">Salaire</dt><dd class="mt-1 font-semibold">${em.salary} MAD</dd></div>
          </dl>
          <div class="mt-4">
            <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">Compétences</p>
            <div class="mt-2 flex flex-wrap gap-2">
            ${Competence(em.skills)}
            </div>
          </div>
          <div class="mt-auto flex gap-3 pt-5">
            <button type="button" class="edit-btn flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold transition hover:bg-slate-50" data-id="${em.id}">Modifier</button>
            <button type="button" class="delete-btn flex-1 rounded-lg border border-red-200 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50" data-id="${em.id}">Supprimer</button>
          </div>
        </article>
          `;
    });
  }
  addEventToBtnsModifier();
  addEventToBtnsDelete();
};

const Competence = (skills) => {
  return skills.map(
    (skill) =>
      `<span class="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium">${skill.name} · ${skill.level}</span>`,
  );
};

const addEventToBtnsModifier = () => {
  const edit_btn = document.querySelectorAll(".edit-btn");
  edit_btn.forEach((btn) => {
    btn.addEventListener("click", (eve) => {
      console.log(eve.target.dataset.id);
    });
  });
};

const addEventToBtnsDelete = () => {
  const delete_btn = document.querySelectorAll(".delete-btn");
  delete_btn.forEach((btn) => {
    btn.addEventListener("click", (eve) => {
      console.log(eve.target.dataset.id);
    });
  });
};

AffichageEmployee(employees);

// FILTRAGE =>
//// Filterer par search bar =>
search.addEventListener("input", (e) => {
  const searchValue = e.target.value;
  AffichageEmployee(
    employees.filter(
      (em) =>
        em.firstName
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase()) ||
        em.lastName
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase()),
    ),
  );
});
//// Filterer par Departement =>
departmentFilter.addEventListener("change", (e) => {
  const Departement = e.target.value;
  AffichageEmployee(employees.filter((em) => em.department === Departement));
});


