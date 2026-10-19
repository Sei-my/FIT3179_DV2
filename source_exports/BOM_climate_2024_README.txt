BOM 2024 state/territory climate summaries (derived, approximate)

Files:
- bom_state_monthly_2024.csv: 8 states/territories x 12 months = 96 rows.
- bom_state_quarterly_2024.csv: 8 states/territories x 4 quarters = 32 rows.
- build_bom_climate_2024.py: reproducible processing code; expects original input archives in /mnt/data.

Sources: User-provided Bureau of Meteorology (BOM) 2024 gridded monthly rainfall totals, mean maximum temperature, and mean minimum temperature; Tourism Research Australia (TRA) Tourism Regions 2026 shapefile for approximate state boundaries.

Method:
- Use the first digit of TRA tourism region code to assign tourism regions to NSW, VIC, QLD, SA, WA, TAS, NT, ACT. Exclude the one feature without a tourism region code.
- Rasterize each state's region polygons on BOM 0.05-degree grid (cell-center inclusion), simplifying polygon boundaries to 0.025 degrees to speed up rasterization.
- Calculate each month's state area-weighted mean grid value using cos(latitude) weights. Ignore BOM nodata=99999.90.
- Monthly mean temperature proxy = (statewide monthly mean maximum + statewide monthly mean minimum)/2. This is NOT a directly observed mean daily temperature.
- Quarter mean max/min = days-in-month-weighted mean of three monthly values; quarter mean temperature proxy is their arithmetic midpoint.
- Quarterly rainfall = sum of three state spatial-mean monthly rainfall totals (mm). This is a mean rainfall depth over the state, NOT the volume of rain and NOT a sum across geographic grid cells.
- Q1 Jan-Mar, Q2 Apr-Jun, Q3 Jul-Sep, Q4 Oct-Dec.

Limitations:
- Approximate derived statistics, NOT official BOM state summaries. Tourism region boundaries dated 2026; data dated 2024. Coastline/boundary simplification and grid-cell sampling introduce uncertainty.
- Australia-wide gridded products may differ in method from individual station observations. Grid 0.05 degrees is not an equal-area grid, hence cosine(latitude) weighting.
- Quarter-level comparisons with TRA are descriptive/correlational only; do not claim causation.
