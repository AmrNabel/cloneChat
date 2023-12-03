import React, { useState, useEffect } from "react";
import axios from "axios";

const ActiveCallsComponent = () => {
  const [activeCalls, setActiveCalls] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://192.168.22.26:3001/api/active-calls"
        );
        setActiveCalls(response.data.activeCalls.map(call => ({
          ...call,
          elapsedTime: getElapsedTimeFromStorage(call.channel) || 0
        })));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const getElapsedTimeFromStorage = (channel) => {
      const storedTime = localStorage.getItem(`elapsedTime_${channel}`);
      return storedTime ? parseInt(storedTime, 10) : 0;
    };

    const setElapsedTimeToStorage = (channel, elapsedTime) => {
      localStorage.setItem(`elapsedTime_${channel}`, elapsedTime);
    };

    fetchData();

    const timer = setInterval(() => {
      setActiveCalls(prevCalls =>
        prevCalls.map(call => {
          const elapsedTime = call.elapsedTime + 1;
          setElapsedTimeToStorage(call.channel, elapsedTime);
          return { ...call, elapsedTime };
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [activeCalls]); 

  return (
    <>
      <div>
        <h1>Active Calls</h1>
        {activeCalls.length === 0 ? (
          <p>No active calls</p>
        ) : (
          <ul>
            {activeCalls.map((call, index) => (
              <li key={index}>
                Channel: {call.channel}, Context: {call.context}, State:{" "}
                {call.state}, Elapsed Time: {call.elapsedTime} seconds
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        {activeCalls.length}
      </div>
    </>
  );
};

export default ActiveCallsComponent;
