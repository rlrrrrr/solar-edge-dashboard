import {create} from 'zustand';
import {persist} from 'zustand/middleware'

interface OpeningHour {
  day: string;
  morningStart: string;
  morningEnd: string;
  eveningStart: string;
  eveningEnd: string;
  morningClosed?: boolean; // Added morningClosed attribute
  eveningClosed?: boolean; // Added eveningClosed attribute
}

interface OpeningHoursState {
  openingHours: OpeningHour[];
  setOpeningHours: (newHours: OpeningHour[]) => void;
}

export const useOpeningHoursStore = create(
  persist<OpeningHoursState>(
    (set) => ({
      openingHours: [
        { day: 'Lundi', morningStart: '08:00', morningEnd: '12:00', eveningStart: '14:00', eveningEnd: '18:00', morningClosed: false, eveningClosed: false },
        { day: 'Mardi', morningStart: '08:00', morningEnd: '12:00', eveningStart: '14:00', eveningEnd: '18:00', morningClosed: false, eveningClosed: false },
        { day: 'Mercredi', morningStart: '08:00', morningEnd: '12:00', eveningStart: '14:00', eveningEnd: '18:00', morningClosed: false, eveningClosed: false },
        { day: 'Jeudi', morningStart: '08:00', morningEnd: '12:00', eveningStart: '14:00', eveningEnd: '18:00', morningClosed: false, eveningClosed: false },
        { day: 'Vendredi', morningStart: '08:00', morningEnd: '12:00', eveningStart: '14:00', eveningEnd: '18:00', morningClosed: false, eveningClosed: false },
        { day: 'Samedi', morningStart: '10:00', morningEnd: '13:00', eveningStart: '15:00', eveningEnd: '17:00', morningClosed: false, eveningClosed: false },
        { day: 'Dimanche', morningStart: '', morningEnd: '', eveningStart: '', eveningEnd: '', morningClosed: true, eveningClosed: true },
      ],
      setOpeningHours: (newHours) => set({ openingHours: newHours }),
    }),
    {
      name: 'opening-hours-storage', // name of the item in the storage
    }
  )
);
