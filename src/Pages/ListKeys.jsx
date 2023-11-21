import React, { useEffect, useState } from "react";
import { getAllKeys } from "../Services/keys.service";
import { API_BASE_URL } from "../constants";

function ListKeys() {
  const [keys, setKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllKeys()
      .then((k) => {
        setKeys(k.map((k) => k.value));
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>Current Keys</h1>
      {keys.length > 0 && !loading && (
        <div style={{ maxHeight: "200px", overflowY: "auto" }}>
          {keys.map((k) => (
            <div>
              {k.key} ::::: {k.value}
            </div>
          ))}
        </div>
      )}
      {loading && <div> Loading...</div>}

      <h3> to get a certain key please use the following API</h3>

      <code> {API_BASE_URL}/v1/hash/:key</code>
    </div>
  );
}

export default ListKeys;
