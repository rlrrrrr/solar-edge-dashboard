import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface OpeningHour {
  day: string;
  morningStart: string;
  morningEnd: string;
  eveningStart: string;
  eveningEnd: string;
  morningClosed?: boolean;
  eveningClosed?: boolean;
}

interface OpeningHoursState {
  openingHours: OpeningHour[];
  setOpeningHours: (newHours: OpeningHour[]) => void;
}

export const useOpeningHoursStore = create(
  persist<OpeningHoursState>(
    (set) => ({
      openingHours: [
        { day: 'Monday', morningStart: '08:00', morningEnd: '12:00', eveningStart: '14:00', eveningEnd: '18:00', morningClosed: false, eveningClosed: false },
        { day: 'Tuesday', morningStart: '08:00', morningEnd: '12:00', eveningStart: '14:00', eveningEnd: '18:00', morningClosed: false, eveningClosed: false },
        { day: 'Wednesday', morningStart: '08:00', morningEnd: '12:00', eveningStart: '14:00', eveningEnd: '18:00', morningClosed: false, eveningClosed: false },
        { day: 'Thursday', morningStart: '08:00', morningEnd: '12:00', eveningStart: '14:00', eveningEnd: '18:00', morningClosed: false, eveningClosed: false },
        { day: 'Friday', morningStart: '08:00', morningEnd: '12:00', eveningStart: '14:00', eveningEnd: '18:00', morningClosed: false, eveningClosed: false },
        { day: 'Saturday', morningStart: '10:00', morningEnd: '13:00', eveningStart: '15:00', eveningEnd: '17:00', morningClosed: false, eveningClosed: false },
        { day: 'Sunday', morningStart: '', morningEnd: '', eveningStart: '', eveningEnd: '', morningClosed: true, eveningClosed: true },
      ],
      setOpeningHours: (newHours) => set({ openingHours: newHours }),
    }),
    {
      name: 'opening-hours-storage', // name of the item in the storage
    }
  )
);
