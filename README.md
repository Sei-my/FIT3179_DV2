# Australia, outside. — Seasonal Outdoor Activities (DV2)

## Topic: Seasonal Outdoor Activities
Explore how outdoor recreation changes throughout the year by comparing activities across different seasons. Investigate how Australia’s climate influences participation in outdoor lifestyles.

The story compares observed patterns; it does not claim that temperature or rainfall causes trip decisions.

## Chart inventory
1. Seasonal heatmap — tra_seasonal_activity_2024.csv
2. Seasonal line profiles — tra_seasonal_activity_2024.csv
3. Beach vs snow quarterly grouped bars — tra_seasonal_activity_2024.csv
4. Bushwalking choropleth — existing regions.geojson (original processed TRA map)
5. Temperature scatter — tra_bom_state_quarter_2024.csv (NSW, VIC, QLD; Beach vs Snow skiing)
6. Rainfall scatter — tra_bom_state_quarter_2024.csv (NSW, VIC, QLD; Bushwalking vs National parks)
7. Regional symbol map — existing map data/spec
8. Regional heatmap — existing regional_activity.csv
9. Victoria beach/bushwalking quarterly line — tra_bom_state_quarter_2024.csv
10. Gender composition — tra_gender_2024.csv
11. State climate grid map — existing quarterly_climate_tiles_2024.csv (BOM derived)
12. Seasonal composition — tra_seasonal_activity_2024.csv

## Interpretation cautions
- TRA uses *stopover activity* and *overnight trips (000)*. A single trip may include multiple activities and stopovers.
- Activity-specific annual shares sum to 100% per activity, and should not be interpreted as overall tourism shares.
- State-quarter climate and activity trip counts are aggregates; they cannot demonstrate causal effects or control for school holidays, visitor volumes, access or geography.
- The climate source uses state-wide averages; local weather can differ.
- Tourism-region maps use geographic boundaries that may differ from 2024 survey regions.
- Q1 Jan–Mar; Q2 Apr–Jun; Q3 Jul–Sep; Q4 Oct–Dec, irrespective of source-file ordering.
