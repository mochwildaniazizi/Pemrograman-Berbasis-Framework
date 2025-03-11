export default async function handler(req, res) {
    const city = req.query.city || "Jakarta"; 
    const apiKey = "5beaf4f7d51b70009a38c943d4a6ee11"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (response.ok) {
        res.status(200).json(data);
      } else {
        res.status(400).json({ error: data.message });
      }
    } catch (error) {
      res.status(500).json({ error: "Terjadi kesalahan saat mengambil data cuaca" });
    }
  }
  
  