const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage = (key) => {
  const storedWeatherData = JSON.parse(localStorage.getItem(key));

  return storedWeatherData || null;
};

export { saveToLocalStorage, getFromLocalStorage };
