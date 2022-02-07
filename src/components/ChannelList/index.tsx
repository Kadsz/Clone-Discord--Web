import React from "react";

import ChannelButton from "../ChannelButton";

import { Container, Category, AddCategoryIcon } from './styles'


const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="reactJs" />
      <ChannelButton channelName="styled-components" />
      <ChannelButton channelName="react-native" />
      <ChannelButton channelName="figma" />
    </Container>
  )

}

export default ChannelList