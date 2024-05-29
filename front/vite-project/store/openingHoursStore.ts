import create from 'zustand';

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

export const useOpeningHoursStore = create<OpeningHoursState>((set) => ({
  openingHours: [
    { day: 'Monday', morningStart: '', morningEnd: '', eveningStart: '', eveningEnd: '' },
    { day: 'Tuesday', morningStart: '', morningEnd: '', eveningStart: '', eveningEnd: '' },
    { day: 'Wednesday', morningStart: '', morningEnd: '', eveningStart: '', eveningEnd: '' },
    { day: 'Thursday', morningStart: '', morningEnd: '', eveningStart: '', eveningEnd: '' },
    { day: 'Friday', morningStart: '', morningEnd: '', eveningStart: '', eveningEnd: '' },
    { day: 'Saturday', morningStart: '', morningEnd: '', eveningStart: '', eveningEnd: '' },
    { day: 'Sunday', morningStart: '', morningEnd: '', eveningStart: '', eveningEnd: '' },
  ],
  setOpeningHours: (newHours) => set({ openingHours: newHours }),
}));
