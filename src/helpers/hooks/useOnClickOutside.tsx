import React from "react";

const useOnClickOutside = (cb: () => void) => {
  const wrapperRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (
      e: MouseEvent | KeyboardEvent,
      ref: React.MutableRefObject<any>
    ) => {
      if (ref.current && !ref.current.contains(e.target)) {
        cb();
      }
      if (e instanceof KeyboardEvent && e.keyCode === 27) {
        cb();
      }
    };
    const clickOutsideListener = (e: MouseEvent) => handleClickOutside(e, wrapperRef);
    const keyDownListener = (e: KeyboardEvent) => handleClickOutside(e, wrapperRef);
    document.addEventListener("click", clickOutsideListener);
    document.addEventListener("keydown", keyDownListener);

    return () => {
      document.removeEventListener("click", clickOutsideListener);
      document.removeEventListener("keydown", keyDownListener);
    };
  }, [cb]);

  return {
    ref: wrapperRef
  };
};

export { useOnClickOutside };
