import React from "react";
import Paginate from "@ftw-js/fetch-paginate";
import withDetail from "../../../../components/with-detail";
import List from "./list";
import Detail from "../../components/ticket-detail";
import { NLP2API } from "@ftw-js/api";
import withStatus from "../../../../components/with-status";

const TicketList = withDetail(List, Detail);

interface Props {
  nlp2API: NLP2API;
}

const AllEntries = (props: Props) => {
  console.log("Display: AllEntries");
  return (
    <Paginate pageSize={30} load={props.nlp2API.getEntries}>
      <TicketList {...props} />
    </Paginate>
  );
};

export default withStatus(AllEntries);
