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



## Data Processing

# Table Data

- Aggregates the dataset to find the crop with the maximum and minimum production for each year.

# Bar Chart Data

- Calculates the average yield for each crop by summing up its production and dividing it by the count of records.

## Libraries Used

- **TypeScript**: Ensures type safety throughout the application.
- **Vite**: Fast build tool and development server.
- **Mantine**: Used for building the table component.
- **Apache ECharts**: Used for rendering the bar chart.



## Screenshots

# Table Component

<img width="960" alt="1" src="https://github.com/user-attachments/assets/f7b135aa-39bb-43ea-9335-d2a9a71edbe0" />

<img width="960" alt="2" src="https://github.com/user-attachments/assets/3431d26b-aebd-420c-8d16-06d5ea63a533" />


# Bar Chart Component

<img width="942" alt="3" src="https://github.com/user-attachments/assets/2607417d-39c6-4fe4-a8de-2e0b32d10817" />


