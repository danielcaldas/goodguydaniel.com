import React, { useEffect, useState, useCallback, FC } from "react";
import styles from "./ScrollToTopButton.module.css";

type Props = {
  threshold: number;
};

function ScrollToTopButton({ threshold = 200 }: Props): FC {
  const isSSR = typeof window === "undefined";
  const [visible, setVisible] = useState(false);
  const scrollToTop = useCallback(() => {
    window && window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let timer = null;
    const toggleVisible = () => {
      timer && clearTimeout(timer);
      timer = setTimeout(() => {
        setVisible(window && window.scrollY > threshold);
      }, 25);
    };
    window && window.addEventListener("scroll", toggleVisible);

    return () => {
      window && timer && clearTimeout(timer);
      window && window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <>
      {!isSSR && (
        <React.Suspense fallback={<div></div>}>
          {visible && (
            <div
              className={styles.container}
              role={"button"}
              tabIndex={"0"}
              onClick={scrollToTop}
              onKeyDown={scrollToTop}
            >
              <svg className={styles.arrow} viewBox="0 0 24 24">
                <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
              </svg>
            </div>
          )}
        </React.Suspense>
      )}
    </>
  );
}

export default ScrollToTopButton;
