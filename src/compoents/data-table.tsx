import React, { type ReactNode } from "react";

export interface Column<T> {
  key: keyof T;
  label: string;
  render?: (row: T) => ReactNode;
}

function DataTable<T>({ columns, data }: { columns: Column<T>[]; data: T[] }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col?.key?.toString()}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td key={col?.key?.toString()}>
                  {col.render ? col.render(row) : (row[col.key] as ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
