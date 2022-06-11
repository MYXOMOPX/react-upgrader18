import { useEffect, useRef, useState } from "react";
import { useSuspenseData } from "../../hook";

export const delayedValue = <V>(value: V, timeout: number = 5000): Promise<V> => {
    return new Promise(resolve => {
        setTimeout(() => resolve(value), timeout);
    })
}

const  suspeseOverPromise = <T>(promise: Promise<T>) => {
    let status = 'pending';
    let result: T;
    let suspender = promise.then(
      (r) => {
        status = 'success';
        result = r;
      },
      (e) => {
        status = 'error';
        result = e;
      }
    );
    if (status === 'pending') {
      throw suspender;
    } else if (status === 'error') {
      throw result!;
    } else if (status === 'success') {
      return result!;
    }
  }


export const useDelayedRandomValue = () => {
  return useSuspenseData(() => delayedValue(Math.random(), 2000));
}