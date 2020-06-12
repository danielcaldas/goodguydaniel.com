import React, { useMemo, useState, FC } from "react";
import exampleFinalResult from "../call-react-hooks-inside-conditions/images/example-final-result.gif";
import travolta from "../about-css-conf-eu-berlin-2018/images/2.gif";
import cssVariablesDemo from "../about-css-conf-eu-berlin-2018/images/css-custom-properties.gif";
import itsATrap from "../my-two-cents-on-tech-job-interviews/images/its-a-trap.gif";
import debugVSCodeAnimation1 from "../debugging-javascript-with-vscode/images/debug-animation-1.gif";
import debugVSCodeAnimation2 from "../debugging-javascript-with-vscode/images/debug-animation-2.gif";
import itsTimeToStop from "../unit-testing-with-fixtures-unleashed/images/its-time-to-stop.gif";
import fixturesWatchMode from "../unit-testing-with-fixtures-unleashed/images/fixtures-watch-mode.gif";
import tweakNoSlowMo from "../tips-end-to-end-testing-puppeteer/images/no-slowmo.gif";
import tweakSlowMo from "../tips-end-to-end-testing-puppeteer/images/slowmo.gif";
import tweakDelay from "../how-to-simulate-delay-http-request/images/tweak-delay.gif";
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

function getFromRegistry(name) {
  switch (name) {
    case "example-final-result":
      return exampleFinalResult;
    case "travolta":
      return travolta;
    case "css-variables-demo":
      return cssVariablesDemo;
    case "its-a-trap":
      return itsATrap;
    case "vscode-debug-1":
      return debugVSCodeAnimation1;
    case "vscode-debug-2":
      return debugVSCodeAnimation2;
    case "time-to-stop":
      return itsTimeToStop;
    case "fixtures-watch-mode":
      return fixturesWatchMode;
    case "tweak-no-slowmo":
      return tweakNoSlowMo;
    case "tweak-slowmo":
      return tweakSlowMo;
    case "tweak-delay":
      return tweakDelay;
    default:
      return "";
  }
}

function GIF({ alt = "", height = "100%", name, playing = false, width = "100%" }: Props): FC {
  const isSSR = typeof window === "undefined";
  const [isPlaying, setPlaying] = useState(playing);
  const src = useMemo(() => getFromRegistry(name), [name]);

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
