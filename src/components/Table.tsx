
import React from 'react';
import { useData, YearlyData } from '../contexts/DataContext';
import { Table as MantineTable, Text,Loader, Title, Group, Button } from '@mantine/core';

const Table: React.FC = () => {
  const { yearlyData } = useData();
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 10;

  const headers: { label: string; key: keyof YearlyData }[] = [
    { label: 'Year', key: 'Year' },
    { label: 'Crop Name', key: 'Crop Name' },
    { label: 'Crop Production (Tonnes)', key: 'Crop Production (UOM:t(Tonnes))' },
    { label: 'Yield (Kg/Ha)', key: 'Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))' },
    { label: 'Area Under Cultivation (Ha)', key: 'Area Under Cultivation (UOM:Ha(Hectares))' },
  ];

  const paginatedData = yearlyData.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  // Navigation functions
  const nextPage = () => setPage((prevPage) => Math.min(prevPage + 1, Math.ceil(yearlyData.length / rowsPerPage)));
  const prevPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', background: '#f9f9f9' }}>
      <Title order={3} style={{ marginBottom: '20px', color: 'black' }}>
        Crop Yield Data Table
      </Title>
      {yearlyData.length === 0 ? (
        <Loader />
      ) : (
        <>
          <MantineTable
            striped
            highlightOnHover
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              border: '2px solid black',
              backgroundColor: 'black',
            }}
          >
            <thead style={{ background: '#0077b6', color: '#fff', position: 'sticky', top: 0, zIndex: 1 }}>
              <tr>
                {headers.map(({ label }) => (
                  <th
                    key={label}
                    style={{
                      padding: '10px',
                      borderBottom: '2px solid black',
                      backgroundColor: 'black',
                    }}
                  >
                    <Text fw={700} color="white">{label}</Text>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((row, index) => (
                <tr key={index}>
                  {headers.map(({ key }) => (
                    <td
                      key={key}
                      style={{
                        padding: '8px',
                        borderBottom: '1px solid black',
                        backgroundColor: 'black',
                      }}
                    >
                      <Text color="white">{row[key] || 'N/A'}</Text>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </MantineTable>

          {/* Custom Pagination */}
          <Group align="center" justify="center" style={{ marginTop: '20px' }}>
            <Button
              variant="outline"
              style={{
                backgroundColor: '#1E90FF', 
                color: 'white',
                width: '100px',
                margin: '0 10px',
              }}
              onClick={prevPage}
              disabled={page === 1}
            >
              Prev
            </Button>
            <Text style={{ lineHeight: '30px', color: '#5B7B7A' }}>
              Page {page} of {Math.ceil(yearlyData.length / rowsPerPage)}
            </Text>
            <Button
              variant="outline"
              style={{
                backgroundColor: '#1E90FF', 
                color: 'white',
                width: '100px',
                margin: '0 10px',
              }}
              onClick={nextPage}
              disabled={page === Math.ceil(yearlyData.length / rowsPerPage)}
            >
              Next
            </Button>
          </Group>
        </>
      )}
    </div>
  );
};

export default Table;
