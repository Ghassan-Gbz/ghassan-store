/* Ghassan Store catalogue. Edit catalog.json to add, change or remove items. */
let activeCategory = "All";
let catalogue = [];
const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const toast = document.getElementById("toast");

const fallbackCatalogue = [
  { title:"Example HTML Tool", category:"HTML Tools", description:"A small sample HTML project you can download and customize for your own work.", icon:"</>", iconClass:"icon-blue", file:"downloads/example-tool.html", fileLabel:"HTML file", size:"Starter sample", featured:true },
  { title:"Your Android App", category:"Apps", description:"Replace this sample listing with your app name, version, details and download link.", icon:"▣", iconClass:"icon-purple", file:"", fileLabel:"APK / app", size:"Add your file", featured:false },
  { title:"Your Creative Image", category:"Images", description:"Add a thumbnail, image description and a link to your original image file.", icon:"▧", iconClass:"icon-green", file:"", fileLabel:"PNG / JPG", size:"Add your file", featured:false },
  { title:"Your Downloadable File", category:"Files", description:"Share PDFs, ZIP archives, documents and other useful resources with visitors.", icon:"⇩", iconClass:"icon-orange", file:"", fileLabel:"PDF / ZIP", size:"Add your file", featured:false }
];

function safeText(value) {
  return String(value ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]));
}
function renderItems() {
  const query = searchInput.value.trim().toLowerCase();
  const items = catalogue.filter(item => {
    const categoryMatch = activeCategory === "All" || item.category === activeCategory;
    const text = `${item.title} ${item.category} ${item.description} ${item.tags || ""}`.toLowerCase();
    return categoryMatch && text.includes(query);
  });
  grid.innerHTML = items.map(item => {
    const downloadable = Boolean(item.file);
    const link = downloadable
      ? `<a class="download-link" href="${safeText(item.file)}" ${item.file.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : 'download'}>Download ↗</a>`
      : `<span class="download-link disabled" aria-label="File link not added">Coming soon</span>`;
    return `<article class="product-card">
      <div class="card-top"><div class="item-icon ${safeText(item.iconClass || "icon-purple")}">${safeText(item.icon || "✦")}</div><span class="item-type">${safeText(item.category)}</span></div>
      <h3>${safeText(item.title)}</h3><p>${safeText(item.description)}</p>
      <div class="card-footer"><span class="file-meta">${safeText(item.fileLabel || "Download")} · ${safeText(item.size || "Details inside")}</span>${link}</div>
    </article>`;
  }).join("");
  resultCount.textContent = `Showing ${items.length} ${items.length === 1 ? "item" : "items"}`;
  emptyState.hidden = items.length !== 0;
}
async function loadCatalogue() {
  try {
    const response = await fetch("catalog.json", { cache: "no-store" });
    if (!response.ok) throw new Error("catalog.json not available");
    const data = await response.json();
    catalogue = Array.isArray(data.items) ? data.items : fallbackCatalogue;
  } catch (error) {
    catalogue = fallbackCatalogue;
  }
  renderItems();
}
document.getElementById("categoryFilters").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  document.querySelectorAll(".filter-chip").forEach(chip => chip.classList.toggle("active", chip === button));
  renderItems();
});
document.querySelectorAll("[data-jump-category]").forEach(button => button.addEventListener("click", () => {
  activeCategory = button.dataset.jumpCategory;
  document.querySelectorAll(".filter-chip").forEach(chip => chip.classList.toggle("active", chip.dataset.category === activeCategory));
  document.getElementById("explore").scrollIntoView({ behavior:"smooth" });
  renderItems();
}));
searchInput.addEventListener("input", renderItems);
const menuToggle = document.getElementById("menuToggle");
menuToggle.addEventListener("click", () => {
  const nav = document.querySelector(".nav-links");
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".nav-links a").forEach(link => link.addEventListener("click", () => {
  document.querySelector(".nav-links").classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
loadCatalogue();
