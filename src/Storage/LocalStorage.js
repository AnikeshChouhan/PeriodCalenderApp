export const setLocalStorageData = (key, value) => {
  if (typeof value === "object") {
    value = JSON.stringify(value);
  }
  localStorage.setItem(key, value);
};

export const getLocalStorageData = (key) => {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch (error) {
    return data;
  }
};
