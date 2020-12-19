import React, { useEffect, useState } from "react";
import MyPagination from "../components/Pagination/Pagination";
import Search from "../components/Search/Search";
import FormTable from "../components/Table/Table";

export var jsondata = [
  {
    id: 1,
    name: "Aasish",
    email: "rjlaasish@gmail.com",
  },
  {
    id: 2,
    name: "Ram",
    email: "ram@gmail.com",
  },
  {
    id: 3,
    name: "Hari",
    email: "rhari@gmail.com",
  },
  {
    id: 4,
    name: "Shyam",
    email: "shyam@gmail.com",
  },
  {
    id: 5,
    name: "Bhuwan",
    email: "bhuwrai@gmail.com",
  },
  {
    id: 6,
    name: "Bhabin",
    email: "bhbkarki@gmail.com",
  },
  {
    id: 7,
    name: "Harish",
    email: "haridh78@gmail.com",
  },
  {
    id: 8,
    name: "Bijay",
    email: "bjkhanal@gmail.com",
  },
  {
    id: 9,
    name: "Bishnu",
    email: "bjkhal@gmail.com",
  },
];

function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setcurrentPage] = useState(1);
  const [dataperPage, setdataperPage] = useState(5);

  // search control
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  // get index of data
  const indexOfLastData = currentPage * dataperPage;
  const indexOfFirstData = indexOfLastData - dataperPage;

  const currentdata = jsondata.slice(indexOfFirstData, indexOfLastData);

  // handlepaginate
  const paginate = (pageNumber) => {
    setcurrentPage(pageNumber);
  };

  const settingData = () => {
    let mysearch = search;
    if (search) {
      mysearch = jsondata.filter((data) =>
        data.name.toLowerCase().includes(mysearch.toLowerCase()) || data.email.toLowerCase().includes(mysearch.toLowerCase())
      );

      setData(mysearch);
    } else {
      setData(currentdata);
    }
  };

  useEffect(() => {
    settingData();
  }, [currentPage, search]);
  return (
    <div style={{ width: "60%", margin: "100px auto" }}>
      <Search onChange={onChange} />
      <FormTable datas={data} changeData={setData} />
      <br />
      <MyPagination
        dataperPage={dataperPage}
        totaldata={search ? 1 : jsondata.length}
        paginate={paginate}
        style={{ float: "right" }}
      />
    </div>
  );
}

export default Home;
