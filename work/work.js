const projects = [
  {
    name: "GN-SCI",
    desc: "Our flagship in-browser gaming website with fun, low-resource games for everyone.",
    link: "https://dumperdull.github.io/"
  },
  {
    name: "GNF Discord",
    desc: "A hub for developers, contributors, and community members to connect and grow.",
    link: "https://discord.gg/YOUR_DISCORD_LINK"
  },
  {
    name: "Experimental Labs",
    desc: "Small-scale prototypes and tech demos — ideas that may evolve into full projects.",
    link: "#"
  },
  {
    name: "Community Tools",
    desc: "Tools for managing, testing, and supporting GNF projects and the community.",
    link: "#"
  },
  {
    name: "Events Platform",
    desc: "Plan, manage, and host community events and giveaways for GNF users.",
    link: "#"
  }
];

const container = document.getElementById("projects");
const search = document.getElementById("search");

function render(list) {
  container.innerHTML = "";

  list.forEach(p => {
    container.innerHTML += `
      <div class="project-card">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <a href="${p.link}" target="_blank">View Project</a>
      </div>
    `;
  });
}

render(projects);

search.addEventListener("input", () => {
  const val = search.value.toLowerCase();
  render(projects.filter(p => p.name.toLowerCase().includes(val)));
});

document.getElementById("year").textContent = new Date().getFullYear();
