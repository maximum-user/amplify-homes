/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Home } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import HomeCard from "./HomeCard";
import { Collection } from "@aws-amplify/ui-react";
import { SortDirection } from "@aws-amplify/datastore";
export default function NewHomes(props) {
  const { home, items: itemsProp, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  const itemsPagination = {
    sort: (s) => s.createdAt(SortDirection.DESCENDING),
  };
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Home,
          pagination: itemsPagination,
        }).items;
  return (
    <Collection
      type="grid"
      templateColumns="1fr 1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Collection")}
    >
      {(item, index) => (
        <HomeCard
          home={item}
          margin="10px 0 0 10px"
          key={item.id}
          {...getOverrideProps(overrides, "Collection.HomeCard[0]")}
        ></HomeCard>
      )}
    </Collection>
  );
}
