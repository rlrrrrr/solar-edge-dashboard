import React, { useState, useEffect } from 'react';
import { Button } from './button';
import { Input } from './input';
import { useFetcher } from "@remix-run/react";
import { useOpeningHoursStore } from '../../store/openingHoursStore';



export default function OpeningTimesSelector({openingHours}){
  const fetcher = useFetcher();
  const { setOpeningHours: setStoredOpeningHours } = useOpeningHoursStore();

  const [openingTimes, setOpeningTimes] = useState(openingHours);

  useEffect(() => {
    setOpeningTimes(openingHours);
  }, [openingHours]);

  const handleTimeChange = (index, period, value) => {
    const [hours, minutes] = value.split(':').map(Number);

    if (period.includes('morning') && (hours < 0 || hours > 11)) {
      alert('Please select a valid morning time (AM).');
      return;
    }
    if (period.includes('evening') && (hours < 12 || hours > 23)) {
      alert('Please select a valid evening time (PM).');
      return;
    }

    const newOpeningTimes = [...openingTimes];
    newOpeningTimes[index] = { ...newOpeningTimes[index], [period]: value };
    setOpeningTimes(newOpeningTimes);

    console.log("newOpeningTimes ", newOpeningTimes)
  };


  const handleClosedChange = (index, period, isClosed) => {
    const newOpeningTimes = [...openingTimes];
    newOpeningTimes[index] = { ...newOpeningTimes[index], [period]: isClosed };
    setOpeningTimes(newOpeningTimes);
  };

  const handleSubmit = () => {
    fetcher.submit(
        { openingTimes: JSON.stringify(openingTimes) },
        { method: 'post', action: '/panel/planner' }
    );

    if (!fetcher.state) {
      setStoredOpeningHours(openingTimes);
    }
  };

  return (
      <div className="p-4">
        {openingTimes.map((time, index) => (
            <div key={time.day} className="bg-black p-4 mb-4 text-white rounded shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="md:w-1/3 mb-2 md:mb-0">
                  <h3 className="text-xl font-semibold">{time.day}</h3>
                </div>
                <div className="flex-1 flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <input
                          type="checkbox"
                          checked={time.morningClosed || false}
                          onChange={(e) => handleClosedChange(index, 'morningClosed', e.target.checked)}
                      />
                      <span>Closed Morning</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                          type="checkbox"
                          checked={time.eveningClosed || false}
                          onChange={(e) => handleClosedChange(index, 'eveningClosed', e.target.checked)}
                      />
                      <span>Closed Evening</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
                    {!time.morningClosed && (
                        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
                          <span className="font-semibold">Morning</span>
                          <Input
                              type="time"
                              value={time.morningStart}
                              onChange={(e) => handleTimeChange(index, 'morningStart', e.target.value)}
                              className="block w-full p-2 border rounded text-black bg-white"
                              min="00:00"
                              max="11:59"
                          />
                          <Input
                              type="time"
                              value={time.morningEnd}
                              onChange={(e) => handleTimeChange(index, 'morningEnd', e.target.value)}
                              className="block w-full p-2 border rounded text-black bg-white"
                              min="00:00"
                              max="11:59"
                          />
                        </div>
                    )}
                    {!time.eveningClosed && (
                        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
                          <span className="font-semibold">Evening</span>
                          <Input
                              type="time"
                              value={time.eveningStart}
                              onChange={(e) => handleTimeChange(index, 'eveningStart', e.target.value)}
                              className="block w-full p-2 border rounded text-black bg-white"
                              min="12:00"
                              max="23:59"
                          />
                          <Input
                              type="time"
                              value={time.eveningEnd}
                              onChange={(e) => handleTimeChange(index, 'eveningEnd', e.target.value)}
                              className="block w-full p-2 border rounded text-black bg-white"
                              min="12:00"
                              max="23:59"
                          />
                        </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
        ))}
        <Button onClick={() => {handleSubmit()}}>
          Save Opening Times
        </Button>
      </div>
  );
};

