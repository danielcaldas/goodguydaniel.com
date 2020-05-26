import React, { useMemo, useState } from 'react';
import exampleFinalResult from '../call-react-hooks-inside-conditions/example-final-result.gif';
import gifStyles from './GIF.module.css';

const Player = React.lazy(() => import('react-gif-player'));

function GIF ({ name, width='100%', height='100%' }) {
  const isSSR = typeof window === "undefined";
  const [playing, setPlaying] = useState(false);
  const src = useMemo(() => {
    switch (name) {
      case 'example-final-result':
        return exampleFinalResult;
      default:
        return exampleFinalResult;
    }
  }, [name]);

  return (
    <>
      {!isSSR && (
        <React.Suspense fallback={<div/>}>
          <div className={gifStyles.gifPlayer}>
            {!playing && <div className={gifStyles.gifPlayButton}></div>}
            {<Player width={width} height={width} gif={src} onTogglePlay={() => setPlaying(!playing)} />}
          </div>
        </React.Suspense>
      )}
    </>
  );
}

export default GIF;