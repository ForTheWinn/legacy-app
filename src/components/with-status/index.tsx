import React, { ComponentType, useEffect, useState } from "react";
import { NLP2API } from "@ftw-js/api";

const withStatus = <P extends object>(Component: ComponentType<P>) => (
  props: any
) => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    NLP2API.getStatus(
      props.wallet && props.wallet.address ? props.wallet.address : undefined
    )
      .then(data => {
        setData(new NLP2API(data));
        setLoading(false);
      })
      .catch(e => {
        setError(e);
      });
  }, [props.address, props.wallet]);
  if (isLoading) return <div />;
  if (error) return <p>Cannot load data</p>;
  return <Component nlp2API={data} {...props} />;
};
export default withStatus;
