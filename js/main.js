/* Section chart specifications live in specs/*.json; source datasets live in data/*.csv.
   This file only handles embedding, accessibility and graceful loading errors. */
"use strict";
const visualisations = [
    ["chart01", "01_choropleth"],
    ["chart02", "02_top_regions"],
    ["chart03", "03_symbol_map"],
    ["chart04", "04_region_heatmap"],
    ["chart05", "05_season_heatmap"],
    ["chart06", "06_bump"],
    ["chart07", "07_temperature_scatter"],
    ["chart08", "08_rainfall_connected"],
    ["chart09", "09_state_dumbbell"],
    ["chart10", "10_state_small_multiples"],
    ["chart11", "11_grid_map"],
    ["chart12", "12_region_profile"]
];

async function embedChart(elementId, filename) {
    const holder = document.getElementById(elementId);
    try {
        const response = await fetch(`specs/${filename}.json`);
        if (!response.ok)
            throw new Error(
                `Could not load ${filename}.json (${response.status})`
            );
        const spec = await response.json();
        await vegaEmbed(holder, spec, {
            actions: true,
            renderer: "svg",
            tooltip: { theme: "light" },
            loader: { baseURL: new URL("specs/", document.baseURI).href }
        });
    } catch (error) {
        console.error(`Chart ${elementId}:`, error);
        holder.innerHTML = `<p class="chart-error">Chart could not load (${filename}). Check the browser console for details. ${error.message}</p>`;
    }
}

window.addEventListener("DOMContentLoaded", () => {
    // Lazy-load charts only when close to the viewport, to reduce first-page load.
    const observer = new IntersectionObserver(
        (entries, obs) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    const name = entry.target.dataset.spec;
                    embedChart(entry.target.id, name);
                    obs.unobserve(entry.target);
                }
            }
        },
        { rootMargin: "350px 0px" }
    );
    for (const [id, filename] of visualisations) {
        const holder = document.getElementById(id);
        if (holder) {
            holder.dataset.spec = filename;
            observer.observe(holder);
        }
    }
});
