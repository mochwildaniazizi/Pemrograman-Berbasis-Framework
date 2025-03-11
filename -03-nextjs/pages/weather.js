import { useState } from "react";

export default function Weather() {
  const [city, setCity] = useState("");  // Menyimpan input kota
  const [weather, setWeather] = useState(null); // Menyimpan data cuaca
  const [error, setError] = useState(""); // Menyimpan pesan error

  const fetchWeather = async () => {
    if (!city) {
      setError("Masukkan nama kota!");
      return;
    }

    setError(""); // Reset error
    const res = await fetch(`/api/weather?city=${city}`);
    const data = await res.json();

    if (data.error) {
      setError(data.error);
      setWeather(null);
    } else {
      setWeather(data);
    }
  };

  return (
    <div>
      <h1>Data Cuaca</h1>
      <input 
        type="text" 
        placeholder="Masukkan nama kota" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
      />
      <button onClick={fetchWeather}>Cek Cuaca</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Suhu: {weather.main.temp}°C</p>
          <p>Cuaca: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}
