import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./App.css";

interface Artwork {
  id: number;
  title: string;
  artist_display: string;
  place_of_origin?: string;
  inscriptions?: string;
  date_start?: string;
  date_end?: string;
}

function App() {
  const [data, setData] = useState<Artwork[]>([]);
  const [selectedArts, setSelectedArts] = useState<Artwork[]>([]);
  const [persistentSelections, setPersistentSelections] = useState<Set<number>>(
    new Set()
  );
  const [totalRecords, setTotalRecords] = useState(0);
  const [loading, setLoading] = useState(true);
  const [first, setFirst] = useState(0);

  useEffect(() => {
    fetchData(1);
  }, []);

  const fetchData = (page: number) => {
    setLoading(true);
    fetch(`https://api.artic.edu/api/v1/artworks?page=${page}`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((json) => {
        setData(json.data);
        setTotalRecords(json.pagination.total);

        const currentPageSelected = json.data.filter((item: Artwork) =>
          persistentSelections.has(item.id)
        );
        setSelectedArts(currentPageSelected);

        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  };

  const onPage = (e: {
    first: number;
    rows: number;
    page: number;
    pageCount: number | undefined;
  }) => {
    setFirst(e.first);
    const page = (e.page !== undefined ? e.page : 0) + 1;
    fetchData(page);
  };

  const onSelectionChange = (e: { value: Artwork[] }) => {
    const newSelections = e.value;
    setSelectedArts(newSelections);

    const newPersistentSelections = new Set(persistentSelections);

    data.forEach((item) => {
      newPersistentSelections.delete(item.id);
    });

    newSelections.forEach((item) => {
      newPersistentSelections.add(item.id);
    });

    setPersistentSelections(newPersistentSelections);
  };

  return (
    <div className="card">
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
        Artworks DataTable
      </h2>
      <DataTable
        value={data}
        selection={selectedArts}
        onSelectionChange={onSelectionChange}
        selectionMode="multiple"
        dataKey="id"
        paginator
        first={first}
        rows={12}
        totalRecords={totalRecords}
        onPage={onPage}
        lazy
        loading={loading}
        tableStyle={{ minWidth: "60rem" }}
      >
        <Column selectionMode="multiple" headerStyle={{ width: "3rem" }} />
        <Column field="id" header="ID" />
        <Column field="title" header="Title" className="sscolumn" />
        <Column field="place_of_origin" header="Place of Origin" />
        <Column field="artist_display" header="Artist Display" className="column1" />
        <Column field="inscriptions" header="Inscriptions" className="column1" />
        <Column field="date_start" header="Start Date" />
        <Column field="date_end" header="End Date" />
      </DataTable>

      
    </div>
  );
}

export default App;
