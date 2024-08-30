import { create } from 'zustand';

import { createJSONStorage, persist } from 'zustand/middleware';

export interface ISlice {
  peerAddress?: string | null;
  isOnNetwork?: boolean;
  isConnected?: boolean;
  keys?: Map<string, Uint8Array>;
  newKeys?: Uint8Array | any;
  isLoggedIn?: boolean;
  web3Wallet?: string;
  showChat?: boolean;
  isConsent?: boolean;
}

export interface ISliceUpdate extends Required<ISlice> {
  update: (data: ISlice) => void;
  clear: () => void;
}

export const defaultValues: Required<ISlice> = {
  isOnNetwork: false,
  keys: new Map(),
  newKeys: undefined,
  isConsent: false,
  isLoggedIn: false,
  showChat: false,
  web3Wallet: '',
  isConnected: false,
  peerAddress: '',
};

export const useChat = create(
  persist<ISliceUpdate>(
    (set) => ({
      ...defaultValues,
      update: (data) =>
        set((state) => {
          return { ...state, ...data };
        }),
      clear: () =>
        set((state) => {
          return { ...state, ...defaultValues };
        }),
    }),
    {
      name: 'chat',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
