document.addEventListener("DOMContentLoaded", function() {
    if (typeof Plotly === "undefined") return;

    document.querySelectorAll(".plotly-graph-div").forEach(div => {
        if (!div.dataset.plotted) {
            const data = JSON.parse(div.dataset.plot);
            const layout = JSON.parse(div.dataset.layout);
            Plotly.newPlot(div.id, data, layout);
            div.dataset.plotted = true; // marque comme fait
        }
    });
});
