import React, { useState, useEffect } from "react";
const url = import.meta.env.VITE_SERVER_URL
function useRequest(subUrl,type = '') {
  const [items, setItems] = useState([]);
  useEffect(() => {
    (async function () {
      const items = await getDataFromServer(subUrl);
      setItems(items);
    })();
  }, []);
  if(type != '') {
    return [
        setItems,items
    ]
  }
  return items
}

async function getDataFromServer(subUrl) {
  const res = await fetch(url + subUrl, { method: "GET" });
  const reponse = await res.json();
  if (res.ok) {
    return reponse["hydra:member"];
  } else {
    return [];
  }
}

export  {useRequest,getDataFromServer};
