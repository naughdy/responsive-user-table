import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
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
        if (window.innerHeight > 700 && page.current < 2) {
          page.current += 1;
          loadData();
        }
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

  const handleScroll = () => {
    var isAtBottom =
      document.documentElement.scrollHeight -
        document.documentElement.scrollTop <=
      document.documentElement.clientHeight;

    if (isAtBottom) {
      page.current += 1;
      loadData();
    }
    // if(window.innerHeight)
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="App">
      <Header filterData={filterData} />
      <div className="main-table-container" onScroll={handleScroll}>
        <CustomizedTables data={filteredData} loadData={loadData} />
      </div>
    </div>
  );
}

export default App;
