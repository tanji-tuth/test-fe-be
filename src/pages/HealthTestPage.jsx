import axios from "axios";
import { useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const HealthTestPage = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const testHealth = async () => {
    setResult(null);
    setError(null);

    try {
      const res = await axios.get(`${API_BASE_URL}/health`);
      setResult(res.data);
    } catch (err) {
      setError({
        status: err.response?.status,
        data: err.response?.data,
        message: err.message,
      });
    }
  };

  return (
    <div className="p-5">
      <h1>Health Test</h1>
      <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600" onClick={testHealth}>Test /health</button>

      {result && (
        <>
          <h3>Result</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </>
      )}

      {error && (
        <>
          <h3>Error</h3>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </>
      )}
    </div>
  );
};

HealthTestPage.displayName = "HealthTestPage";

export default HealthTestPage;
