import React, { useContext, useEffect, useState } from 'react';
import { ButtonCard, CardPost, CardStyle, ContainerCard, ContainerCardHome, ContainerPerfil, ConteudoCard, EditPost, ImgCard, ImgPost, MensagemCard, NomeCard, PerfilUsuario, TituloCard } from './style';
import { getPostAll } from '../../services/requests';
import Comentar from '../Comentar/Comentar';
import { GlobalStateContect } from '../../GlobalState/GlobalStateContext';

function Card() {
  const [loading, setLoading] = useState(true)
  const [forumTopics, setForumTopics] = useState([])

  const {selectedPostId} = useContext(GlobalStateContect)

  useEffect(()=>{
    getPostAll(setForumTopics)
},[])
 
  return (
    <>

   {

    loading?(
  <ContainerCard>
  {forumTopics && forumTopics.map(dado=>{
  return(
      <CardStyle key={dado.post.id}>
           <PerfilUsuario>
              <ImgCard src={'https://s2.glbimg.com/czDZS5koMVp_0qBUfiw_SdBlHCA=/s.glbimg.com/jo/g1/f/original/2016/04/08/fat.png'}/>
              <ContainerPerfil>
                  <NomeCard>{dado.creator_username}</NomeCard>
                  <MensagemCard>{dado.post_created_at}</MensagemCard>
              </ContainerPerfil>
          </PerfilUsuario>
          <TituloCard>{dado.post_title}</TituloCard>
          <CardPost>
            <ImgPost src={dado.post_image} alt='foto post'/>
            <ConteudoCard>{dado.post_content}</ConteudoCard>
          </CardPost>
          <EditPost>
            <Comentar
              postId={dado.post_id}
              comments={dado.comments}
              autorId= {dado.created_id}
            />
          </EditPost>
      </CardStyle>
)
})}
</ContainerCard>):(<p>loading</p>)

    }


    </>
  )
}

export default Card