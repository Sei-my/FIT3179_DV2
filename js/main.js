/* Section chart specifications live in specs/*.json; source datasets live in data/*.csv.
   This file only handles embedding, accessibility and graceful loading errors. */
"use strict";
const visualisations = [
    ["chart01", "01_seasonal_heatmap"],
    ["chart02", "02_seasonal_profiles"],
    ["chart03", "03_summer_winter_contrast"],
    ["chart04", "04_bushwalking_region_map"],
    ["chart05", "05_temperature_scatter"],
    ["chart06", "06_rainfall_scatter"],
    ["chart07", "07_regional_symbol_map"],
    ["chart08", "08_regional_activity_heatmap"],
    ["chart09", "09_victoria_quarterly_profile"],
    ["chart10", "10_gender_composition"],
    ["chart11", "11_climate_grid_map"],
    ["chart12", "12_seasonal_signature"]
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
