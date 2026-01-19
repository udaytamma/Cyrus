import { useSyncExternalStore } from "react";

const STORAGE_EVENT = "cyrus-local-storage";

type StorageEventDetail = {
  key?: string;
};

export function notifyLocalStorageChange(key: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent<StorageEventDetail>(STORAGE_EVENT, { detail: { key } }));
}

export function useLocalStorageFlag(key: string, serverValue: boolean | null = false) {
  const getSnapshot = () => {
    if (typeof window === "undefined") return serverValue;
    return localStorage.getItem(key) === "true";
  };

  const subscribe = (listener: () => void) => {
    if (typeof window === "undefined") return () => {};

    const handler = (event: StorageEvent | Event) => {
      if (event instanceof StorageEvent) {
        if (event.key && event.key !== key) return;
      } else {
        const detail = (event as CustomEvent<StorageEventDetail>).detail;
        if (detail?.key && detail.key !== key) return;
      }
      listener();
    };

    window.addEventListener("storage", handler);
    window.addEventListener(STORAGE_EVENT, handler as EventListener);
    return () => {
      window.removeEventListener("storage", handler);
      window.removeEventListener(STORAGE_EVENT, handler as EventListener);
    };
  };

  return useSyncExternalStore(subscribe, getSnapshot, () => serverValue);
}

export function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}
