import "./App.css";
import ComponentWithoutJs from "./compoents/coponent-without-js/component-without-js";
// import type { Column } from "./compoents/data-table";
// import DataTable from "./compoents/data-table";
// import FlexExample from "./compoents/flex/flex-example";
// import Grid from "./compoents/grid/grid";
// import useRecipes, { type Recipe } from "./hooks/useRecipes";

// const RecipeColumns: Column<Recipe>[] = [
//   {
//     key: "id",
//     label: "Id",
//   },
//   {
//     key: "name",
//     label: "Name",
//   },
//   {
//     key: "difficulty",
//     label: "Difficukty",
//   },
//   {
//     key: "cuisine",
//     label: "Cuisine",
//   },
// ];

function App() {
  // const { data, debounceSearch, setPage, page, totalPages, handleSort, sort } = useRecipes();
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {totalPages}{JSON.stringify(sort)}
      <div className="mx-auto">
        {page}
        <input
          className=" py-2 px-4 bg-slate-100 border border-slate-200"
          onChange={(e) => debounceSearch(e.target.value)}
        />
        <DataTable<Recipe> columns={RecipeColumns} data={data?.recipes || []} onSort={handleSort} />
        <button
          className="px-4 py-2 bg-slate-400"
          disabled={page + 1 === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          previous
        </button>
        <button
          className=" px-4 py-2 ml-3 bg-slate-400"
          disabled={page + 1 === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          next
        </button>
      </div> */}
      
      {/* <FlexExample /> */}
      {/* <Grid /> */}
      <ComponentWithoutJs />
    </>
  );
}

export default App;
