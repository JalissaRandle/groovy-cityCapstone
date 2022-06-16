import {
    Facebook,
    Instagram,
    Pinterest,
    Twitter,
  } from "@material-ui/icons";
  import styled from "styled-components";

  
  const Container = styled.div`
    display: flex;
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
    /* display: flex; */
    /* font-weight: 400; */
    font-size: large;
    font-weight: bolder;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>Groovy City</Logo>
          <Desc>
          Come and hop on the passage to groove at the most sensational place 
          where you can find yourself and maybe you can find someone else. 
          You might've heard of Funky town but you just wait ‘til you get to Groovy City.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Artist</ListItem>
            <ListItem>Tickets</ListItem>
            <ListItem>Merch</ListItem>
            <ListItem>My Account</ListItem>
          </List>
        </Center>
      </Container>
    );
  };
  
  export default Footer;