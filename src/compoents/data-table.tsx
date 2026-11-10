import React, { type ReactNode, type MouseEventHandler } from "react";

export interface Column<T> {
  key: keyof T;
  label: string;
  render?: (row: T) => ReactNode;
}

function DataTable<T>({
  columns,
  data,
  onSort,
}: {
  columns: Column<T>[];
  data: T[];
  onSort: MouseEventHandler<HTMLElement>;
}) {
  return (
    <div>
      <table>
        <thead>
          <tr onClick={onSort}>
            {columns.map((col) => (
              <th data-id={col.key} key={col?.key?.toString()}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((row, index) => (
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
