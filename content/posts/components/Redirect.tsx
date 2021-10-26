import React, { FC, useEffect } from "react";

type Props = {
  to: string;
};

function Redirect({ to }: Props): FC {
  useEffect(() => {
    try {
      window.location = to;
      // eslint-disable-next-line no-empty
    } catch (error) {}
  }, []);

  return <div></div>;
}

export default Redirect;
