import { API_BASE_URL, LOCAL_STORAGE_PASS_KEY } from "../constants";

export async function getAllKeys() {
  const URL = `${API_BASE_URL}/v1/hash/all`;

  return await fetch(URL)
    .then((res) => res.json())
    .then((res) =>
      Object.keys(res.hash).map((key) => ({ key, value: res.hash[key] }))
    );
}

export async function addKey(key, value) {
  const pass = localStorage.getItem(LOCAL_STORAGE_PASS_KEY).replace(/"/g, "");
  const URL = `${API_BASE_URL}/v1/hash?key=${key}&value=${value}&pass=${pass}`;

  fetch(URL)
    .then((res) => res.text())
    .then((res) => alert(res))
    .catch(alert);
}
