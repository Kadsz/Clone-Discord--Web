import React, { useRef, useEffect } from "react";
import ChannelMenssage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'


const ChannelData: React.FC = () => {

  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMenssage
            author="Carlos Eduardo"
            date="31/01/2022"
            content="Hoje é dia de ReactJs!!"
          />
        ))}

        <ChannelMenssage
          author="Bot ReactJs"
          date="31/01/2022"
          content={
            <>
              <Mention>@Carlos Eduardo</Mention> Já estudou ReactJs hoje??
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-geral" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )

}

export default ChannelData