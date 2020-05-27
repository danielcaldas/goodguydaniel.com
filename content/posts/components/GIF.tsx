import React, { useMemo, useState, FC } from "react";
import exampleFinalResult from "../call-react-hooks-inside-conditions/example-final-result.gif";
import gifStyles from "./GIF.module.css";

const Player = React.lazy(() => import("react-gif-player"));

type Props = {
  name: string;
  width: string;
  height: string;
};

function GIF({ name, width = "100%", height = "100%" }: Props): FC {
  const isSSR = typeof window === "undefined";
  const [playing, setPlaying] = useState(false);
  const src = useMemo(() => {
    switch (name) {
      case "example-final-result":
        return exampleFinalResult;
      default:
        return exampleFinalResult;
    }
  }, [name]);

  return (
    <>
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <div className={gifStyles.gifPlayer}>
            {!playing && <div className={gifStyles.gifPlayButton}></div>}
            {
              <Player
                width={width}
                height={height}
                gif={src}
                onTogglePlay={() => setPlaying(!playing)}
              />
            }
          </div>
        </React.Suspense>
      )}
    </>
  );
}

export default GIF;
