import { useCallback, useRef } from "react";

type Debounce = (fn: () => void) => void;

type DebounceReturn = {
  // debounceさせたい処理をラップする関数
  debounce: Debounce;
  // 即座に実行する用の関数であるflushも定義
  flush: () => void;
};

export const useDebounce = (timeout: number): DebounceReturn => {
  // useRefを用いてタイマーIDをレンダリング間で保持している
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // useRefを用いて最新のdebounceさせたい処理をレンダリング間で保持している
  const debounceFn = useRef<() => void>(() => {});

  const debounce: Debounce = useCallback(
    (fn) => {
      debounceFn.current = fn;
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        debounceFn.current();
        debounceFn.current = () => {};
      }, timeout);
    },
    [timeout]
  );

  // debounceの遅延を待たずに直ちに実行するためのもの
  const flush = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    debounceFn.current();
  }, [timer.current, debounceFn.current]);

  return { debounce, flush };
};
