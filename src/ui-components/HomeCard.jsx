/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function HomeCard(props) {
  const { home, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="291px"
      height="513px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Image
        width="291px"
        height="378px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        src={home?.image_url}
        {...getOverrideProps(overrides, "View.Image[0]")}
      ></Image>
      <View
        width="291px"
        height="135px"
        position="absolute"
        top="378px"
        left="0px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.View[0]")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="291px"
          height="63px"
          position="absolute"
          top="72px"
          left="0px"
          padding="0px 0px 0px 0px"
          children={home?.price}
          {...getOverrideProps(overrides, "View.View[0].Text[0]")}
        ></Text>
        <Text
          fontFamily="Roboto"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="291px"
          height="67px"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          children={home?.address}
          {...getOverrideProps(overrides, "View.View[0].Text[1]")}
        ></Text>
      </View>
    </View>
  );
}
