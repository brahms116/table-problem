
import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
// import TableWrapper from "./TableWrapper";

export default function App() {
  const columns = ["Name", "Company", "City", "State"];

  const [dummyCount, setDummyCount] = useState(0)
  const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
  ];

  const handleTableChange = (action, tableState) => {
    console.log("onTableChanged")
    // Setting state here causes infinite loop
    // setDummyCount(dummyCount + 1)
  }
  const options = {
    onTableChange: handleTableChange
  }

  return (
    <div>
      <div style={{ marginBottom: "3rem" }} onClick={() => setDummyCount(dummyCount + 1)}>
        CLICK ME HERE counter:{dummyCount}</div>
      <MUIDataTable title={"Employee List"} data={data} columns={columns} options={options} />
      {/* Work Around: Wrapping table with shouldComponentUpdate */}
      {/* <TableWrapper title={"Employee List"} data={data} columns={columns} options={options} /> */}
    </div>
  );
}

