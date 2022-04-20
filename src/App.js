import { styled } from "@mui/material";
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
import { SideDetails } from "./components/SideDetails";

const StyledTableContainer = styled("div")(({ theme, sideOpen }) => ({
  // hide last border
  width: sideOpen ? "100%" : "80%",
}));

function App() {
  const page = useRef(1);
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});

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
      <StyledTableContainer
        className="main-table-container"
        onScroll={handleScroll}
        sideOpen={open}
      >
        <CustomizedTables
          data={filteredData}
          loadData={loadData}
          openSideDetails={() => setOpen(true)}
          setSideUser={(obj) => setUser(obj)}
        />
        {open && <SideDetails user={user} />}
      </StyledTableContainer>
    </div>
  );
}

export default App;
