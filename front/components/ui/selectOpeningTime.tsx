import React, { useState, useEffect } from 'react';
import { Button } from './button';
import { Input } from './input';
import { useOpeningHoursStore } from '../../store/openingHoursStore';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const OpeningTimesSelector = () => {
  const { openingHours, setOpeningHours } = useOpeningHoursStore();

  const [openingTimes, setOpeningTimes] = useState(openingHours);

  useEffect(() => {
    setOpeningTimes(openingHours);
  }, [openingHours]);

  const handleTimeChange = (index: number, period: string, value: string) => {
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
  };

  const handleClosedChange = (index: number, period: string, isClosed: boolean) => {
    const newOpeningTimes = [...openingTimes];
    newOpeningTimes[index] = { ...newOpeningTimes[index], [period]: isClosed };
    setOpeningTimes(newOpeningTimes);
  };

  const handleSubmit = () => {
    setOpeningHours(openingTimes);
  };

  return (
    <div className="p-4">
      {openingTimes.map((time, index) => (
        <div key={time.day} className="bg-black p-4 mb-4 text-white rounded shadow">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div className="md:w-1/3">
              <h3 className="text-xl font-semibold mb-2 md:mb-0">{time.day}</h3>
            </div>
            <div className="flex-1 space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={time.morningClosed || false}
                  onChange={(e) => handleClosedChange(index, 'morningClosed', e.target.checked)}
                />
                <span>Closed Morning</span>
              </div>
              {!time.morningClosed && (
                <div className="flex flex-col">
                  <span className="font-semibold">Morning</span>
                  <div className="flex space-x-2">
                    <Input
                      type="time"
                      value={time.morningStart}
                      onChange={(e) => handleTimeChange(index, 'morningStart', e.target.value)}
                      className="block w-full mt-1 p-2 border rounded text-black bg-white"
                      min="00:00"
                      max="11:59"
                    />
                    <Input
                      type="time"
                      value={time.morningEnd}
                      onChange={(e) => handleTimeChange(index, 'morningEnd', e.target.value)}
                      className="block w-full mt-1 p-2 border rounded text-black bg-white"
                      min="00:00"
                      max="11:59"
                    />
                  </div>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={time.eveningClosed || false}
                  onChange={(e) => handleClosedChange(index, 'eveningClosed', e.target.checked)}
                />
                <span>Closed Evening</span>
              </div>
              {!time.eveningClosed && (
                <div className="flex flex-col">
                  <span className="font-semibold">Evening</span>
                  <div className="flex space-x-2">
                    <Input
                      type="time"
                      value={time.eveningStart}
                      onChange={(e) => handleTimeChange(index, 'eveningStart', e.target.value)}
                      className="block w-full mt-1 p-2 border rounded text-black bg-white"
                      min="12:00"
                      max="23:59"
                    />
                    <Input
                      type="time"
                      value={time.eveningEnd}
                      onChange={(e) => handleTimeChange(index, 'eveningEnd', e.target.value)}
                      className="block w-full mt-1 p-2 border rounded text-black bg-white"
                      min="12:00"
                      max="23:59"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      <Button onClick={handleSubmit}>
        Save Opening Times
      </Button>
    </div>
  );
};

export default OpeningTimesSelector;
