import { useEffect, useRef } from "react";

export const useObservable = (element, canLoad, isLoading, callback) => {
  const observer = useRef();

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    let observerCallback = (entries,  observer) => {
        if (entries[0].isIntersecting && canLoad){
            callback();
        }
    }

    observer.current = new IntersectionObserver(observerCallback);
    observer.current.observe(element.current);
  }, [isLoading]);
};
