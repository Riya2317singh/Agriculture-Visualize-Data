# Agriculture Visualize Data

This project visualizes data from the Indian Agriculture dataset provided by the National Data and Analytics Platform (NDAP), NITI Aayog. It includes two key components:

1. A table displaying the crop with maximum and minimum production for each year.
2. A bar chart showing the average yield of crops between 1950 and 2020.

The project is built with TypeScript, Vite, Mantine, and Apache ECharts.

## Features

- Table: Aggregates and displays the crops with the highest and lowest production for each year.
- Bar Chart: Visualizes the average yield of each crop across the dataset.
- Efficient Data Processing: Handles missing values (treated as `0`) and processes large datasets efficiently.

  ## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd agriculture-analysis
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   yarn dev
   ```

4. Open your browser at `http://localhost:5173` to view the app.


## Folder Structure
<img width="434" alt="folder structure" src="https://github.com/user-attachments/assets/83429acd-17e3-4355-86f2-bca13ea0f297" />


/src
├── components
│   ├── Table.tsx         // Mantine table for crop data
│   ├── BarChart.tsx      // Apache ECharts bar chart
│   ├── Layout.tsx        // Common layout wrapper
├── utils
│   ├── dataProcessor.ts  // Data aggregation logic
│   ├── constants.ts      // Define dataset paths or constants
├── data
│   ├── cropsData.json    // Local copy of the dataset
├── App.tsx               // Main entry point
├── index.css             // Styling (if needed)
```



