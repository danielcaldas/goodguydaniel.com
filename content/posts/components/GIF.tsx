import React, { useMemo, useState, FC } from "react";
import exampleFinalResult from "../call-react-hooks-inside-conditions/example-final-result.gif";
import travolta from "../about-css-conf-eu-berlin-2018/2.gif";
import cssVariablesDemo from "../about-css-conf-eu-berlin-2018/css-custom-properties.gif";
import gifStyles from "./GIF.module.css";

// https://github.com/benwiley4000/react-gif-player#options
const Player = React.lazy(() => import("react-gif-player"));

type Props = {
  alt: string;
  height: string;
  name: string;
  playing: boolean;
  width: string;
};

function GIF({
  alt = "",
  height = "100%",
  name,
  playing = false,
  width = "100%",
}: Props): FC {
  const isSSR = typeof window === "undefined";
  const [isPlaying, setPlaying] = useState(playing);
  const src = useMemo(() => {
    switch (name) {
      case "example-final-result":
        return exampleFinalResult;
      case "travolta":
        return travolta;
      case "css-variables-demo":
        return cssVariablesDemo;
      default:
        return "";
    }
  }, [name]);

  return (
    <>
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <div className={gifStyles.gifPlayerContainer}>
            <div className={gifStyles.gifPlayer}>
              {!isPlaying && <div className={gifStyles.gifPlayButton}></div>}
              {
                <Player
                  width={width}
                  height={height}
                  alt={alt}
                  gif={src}
                  playing={isPlaying}
                  autoplay={isPlaying}
                  onTogglePlay={() => setPlaying(!isPlaying)}
                />
              }
            </div>
          </div>
        </React.Suspense>
      )}
    </>
  );
}

export default GIF;
