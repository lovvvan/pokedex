import { useState, useEffect } from "react";

function useData(url) {
    const [data, setData] = useState();

    useEffect(() => {
      const fetchData = async () => {
        const newData = await (
          await fetch(url)).json();
  
        setData(newData);
      };
  
      fetchData();
    }, [url]);

  return { data: data }
}

export default useData