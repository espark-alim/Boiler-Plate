import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function DataTable({ rows, columns }) {
  // const columns = [{ field: "id", headerName: "ID", width: 150 }]; // for ex col data
  // const rows = [{ id: 1, lastName: "Snow", firstName: "Jon", age: 35 }]; for ex row data
  return (
    rows &&
    columns && (
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    )
  );
}
