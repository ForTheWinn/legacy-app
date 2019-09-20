import React from "react";
import Paginate from "@ftw-js/fetch-paginate";
import withDetail from "../../components/with-detail";
import List from "./List";
import Detail from "./Detail";
import withStatus from "../../components/with-status";
import { NLP2API } from "@ftw-js/api";

const ResultList = withDetail(List, Detail);

interface Props {
  nlp2API: NLP2API;
}

const Results = ({ nlp2API }: Props) => {
  console.log("Display: Results");
  return (
    <div className="box">
      <Paginate pageSize={30} load={nlp2API.getResults}>
        <ResultList />
      </Paginate>
    </div>
  );
};

export default withStatus(Results);
