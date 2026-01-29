// Add a unique Google Form link for each job
const jobs = [
  {
    title: "Frontend Developer",
    desc: "Build interfaces for GN-SCI and internal GNF tools using HTML, CSS, and JS.",
    link: "https://forms.gle/LRbs4JvwFhwS3SBN8" // replace with your real form link
  },
  {
    title: "Beta Tester",
    desc: "Test games for bugs, performance, and fairness across devices.",
    link: "https://forms.gle/1vHXdvm8WBfUf6f5A"
  },
  {
    title: "Community Moderator",
    desc: "Help UAT get things done. Help enforce the GNF Discord rules to make sure everyone is welcome.",
    link: "https://forms.gle/NNhmjGeZvedMDCjWA"
  },
  {
    title: "User Assistance Team",
    desc: "Pave the way towards user safety and support in our GNF Discord.",
    link: "https://forms.gle/2cseTNM5v3jmfwyj9"
  },
  {
    title: "GNF Events Team",
    desc: "Plan giveaways, stages, and help bring the community together in the form of fun, engaging games.",
    link: "https://forms.gle/X2gD6RLABUL75X8F7"
  }
];

const container = document.getElementById("jobs");
const search = document.getElementById("search");

// Render the jobs dynamically
function render(list) {
  container.innerHTML = "";

  list.forEach(job => {
    container.innerHTML += `
      <div class="job">
        <h3>${job.title}</h3>
        <p>${job.desc}</p>
        <a class="apply" href="${job.link}" target="_blank">Apply</a>
      </div>
    `;
  });
}

// Initial render
render(jobs);

// Search filter
search.addEventListener("input", () => {
  const val = search.value.toLowerCase();
  render(jobs.filter(j => j.title.toLowerCase().includes(val)));
});

// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();
