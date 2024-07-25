import  { useState } from 'react';
import axios from 'axios';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {Card} from "@/components/ui/card"



const StocksPage = () => {
  const [stock, setStock] = useState(null);
  // const [filterType, setFilterType] = useState('');
  // const [filteredStocks, setFilteredStocks] = useState([]);

  const apiUrl = 'http://localhost:3000';

  const getRandomFact = async () => {
    const response = await axios.get(`${apiUrl}/random`);
    setStock(response.data);
  };

  // const getRandomLearning = async () => {
  //   const response = await axios.get(`${apiUrl}/random?category=Learning`);
  //   setStock(response.data);
  // };

  // const filterStocks = async () => {
  //   const response = await axios.get(`${apiUrl}/filter?type=${filterType}`);
  //   setFilteredStocks(response.data);
  // };

  return (
    <div className="bg-blue-500 min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-black text-4xl font-bold mb-8">Stocks API</h1>
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
        <Button onClick={getRandomFact} className="bg-white text-blue-500 px-4 py-2 rounded shadow-md">Get Random Stock Market Quote</Button>
        {/* <Button onClick={getRandomLearning} className="bg-white text-blue-500 px-4 py-2 rounded shadow-md">Get Random Learning</Button> */}
        {/* <Input
          type="text"
          placeholder="Enter Stock Category"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-4 py-2 rounded shadow-md"
        />
        <Button onClick={filterStocks} className="bg-white text-blue-500 px-4 py-2 rounded shadow-md">Filter Stocks By Facts/Learning</Button> */}
      </div>
      <div className="mt-8 w-full max-w-2xl">
        {stock && (
          <Card className="bg-white p-6 rounded shadow-md mb-4">
            <h2 className="text-xl font-bold mb-2">Stock:</h2>
            <p className="text-gray-700">{stock.text}</p>
            <p className="text-gray-500">Category: {stock.category}</p>
          </Card>
        )}
        {/* {filteredStocks.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Filtered Stocks:</h2>
            {filteredStocks.map((stock) => (
              <Card key={stock.id} className="bg-white p-6 rounded shadow-md mb-4">
                <p className="text-gray-700">{stock.text}</p>
              </Card>
            ))}
          </div>
        )} */}
      </div>
    </div>
  );
};

export default StocksPage;
