import React, { useEffect, useState } from "react";
import { NLP2API } from "@ftw-js/api";
import { wallet } from "@cityofzion/neon-js";

const withStatus = (Component: any) => (props: any) => {
  const [data, setData] = useState(
    // @ts-ignore
    wallet && wallet.address ? wallet.address : undefined
  );
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    NLP2API.getStatus(props.address)
      .then(data => {
        setData(new NLP2API(data));
        setLoading(false);
      })
      .catch(e => {
        console.log(e)
        setError(e);
      });
  }, [props.address]);
  if (isLoading) return <div />;
  if (error) return <p>Cannot load data</p>;
  return <Component nlp2API={data} {...props} />;
};
export default withStatus;
