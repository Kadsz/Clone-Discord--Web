import React from "react";

import { Container, Role, User, Avatar } from './styles'

interface UserProps {
  nickname: string;
  isBot?: boolean;
}



const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}


const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1 </Role>
      <UserRow nickname="Carlos Eduardo" />
      <UserRow nickname="Thomas" />
      <UserRow nickname="Mateus Aguiar" />
      <UserRow nickname="Henrique Demelo" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Vinicius" />
      <UserRow nickname="José" />
      <UserRow nickname="Bot ReactJs" isBot />
      <UserRow nickname="Beatriz" />
      <UserRow nickname="Mickey" />
      <UserRow nickname="João Vitor" />
      <UserRow nickname="Raxun" />
      <UserRow nickname="Enrico" />
      <UserRow nickname="Bigode" />
      <UserRow nickname="Peygal" />
      <UserRow nickname="Kaereawa" />
      <UserRow nickname="Irhor" />
      <UserRow nickname="Ceuir" />
      <UserRow nickname="Vaegofey" />
      <UserRow nickname="Luzes" />
      <UserRow nickname="Zyus" />
      <UserRow nickname="Kleber" />
      <UserRow nickname="Leonardo" />

    </Container>
  )

}

export default UserList