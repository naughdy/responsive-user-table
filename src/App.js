import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import "./App.css";
import CustomizedTables from "./components/CustomizedTables";
import { Header } from "./components/Header";
function App() {
  const page = useRef(1);
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const loadData = useCallback(() => {
    fetch(`https://reqres.in/api/users?page=${page.current}`)
      .then((res) => res.json())
      .then((data) => {
        setOriginalData((old) => {
          return [...old, ...data.data];
        });
        setFilteredData((old) => {
          return [...old, ...data.data];
        });
        page.current += 1;
      });
  }, []);

  useLayoutEffect(() => {
    loadData();
  }, [loadData]);

  const filterData = (text) => {
    setFilteredData(
      originalData.filter((item) => Object.values(item).join().includes(text))
    );
  };

  return (
    <div className="App">
      <Header filterData={filterData} />
      <div className="main-table-container">
        <CustomizedTables data={filteredData} loadData={loadData} />
      </div>
    </div>
  );
}

export default App;
