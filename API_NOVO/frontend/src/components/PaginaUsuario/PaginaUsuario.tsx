import styles from "./Usuario.module.css"
import "rbx/index.css"
import { Navbar, Image, Container, Title, Content, Column, Table, Footer} from 'rbx';
import { useState } from "react";
import PopupEdicao from "../Popups/PopupEdicao";

function PaginaUsuario(this: any) {
    const [IsOpenPopup, setIsOpenPopup] = useState(false)

    // const abrirPopup = () => {
    //   setIsOpenPopup(true)
    //   <PopupEdicao setIsOpenPopup={setIsOpenPopup} />
    // }

    return (
        <>
        {/* NavbarUsuario */}
    <div className={styles.body}>
      <div>
      <Navbar className={styles.UsuarioNavbar} fixed="top">
      <Container>
          <Navbar.Brand>
          <Navbar.Item>
            <Image src="/imagens/logoVisiona.png"width = '120'/>
            <div className={styles.frasesDiv}></div>
            <div className={styles.frasesDiv}>
            <strong>Operação:</strong></div>
            <div className={styles.frasesDiv}>Perfil de usuário</div>
         </Navbar.Item>
         <Navbar.Burger/>
         </Navbar.Brand>
         <Navbar.Menu>
          <Navbar.Segment align="end">
                  <Navbar.Item dropdown>
                    <Navbar.Link><Image src="/imagens/user.png"width = '40'/></Navbar.Link>
                    <Navbar.Dropdown>
                    <Navbar.Item>Informações</Navbar.Item>
                    <Navbar.Item>Editar</Navbar.Item>
                    <Navbar.Item>Sair</Navbar.Item>
                    </Navbar.Dropdown>
          </Navbar.Item>
        </Navbar.Segment>
      </Navbar.Menu>
    </Container>
  </Navbar>


      {/* InfoUsuario */}


<div className={styles.box}>
    <Title size={5}><strong>Informações do usuário</strong></Title>
      <Content>
          <Column.Group>
             <Column size={5}>
                 <div className={styles.letra}>
                    <div><strong>Nome:</strong></div>
                    <div><strong>Email:</strong> </div>
                    <div><strong>Usuário:</strong> </div>
                    <div><strong>Tipo:</strong> </div>
                    <div ><strong>Criado em:</strong> </div>
                    <button type="button" onClick={setIsOpenPopup.bind(this, true)}><strong>Editar informações</strong></button>
                    {IsOpenPopup && <PopupEdicao setIsOpenPopup={setIsOpenPopup} />}
                    
                  </div>
              </Column>
            </Column.Group>
        </Content>
  </div>


        {/* AtivConta */}


        <Table bordered className={styles.posicaoTabela}>
                    <Table.Head>
                        <Table.Row>
                            <Table.Heading className={styles.textoTabela} colSpan={2}>Histórico de atividade da conta</Table.Heading>
                        </Table.Row>
                    </Table.Head>
                    <Table.Head>
                        <Table.Row>
                            <Table.Heading className={styles.textoAçao}>Ação</Table.Heading>
                            <Table.Heading className={styles.textoAçao}>Data</Table.Heading>
                        </Table.Row>
                    </Table.Head>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell className={styles.textoAçao}>Troca de Senha</Table.Cell>
                            <Table.Cell className={styles.textoAçao}>08/03/2023   16:45:56</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className={styles.textoAçao}>Troca de Email</Table.Cell>
                            <Table.Cell className={styles.textoAçao}>08/03/2023   16:45:56</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className={styles.textoAçao}>Troca de Email</Table.Cell>
                            <Table.Cell className={styles.textoAçao}>08/03/2023   16:45:56</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className={styles.textoAçao}>Troca de Email</Table.Cell>
                            <Table.Cell className={styles.textoAçao}>08/03/2023   16:45:56</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className={styles.textoAçao}>Troca de Email</Table.Cell>
                            <Table.Cell className={styles.textoAçao}>08/03/2023   16:45:56</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className={styles.textoAçao}>Troca de Senha</Table.Cell>
                            <Table.Cell className={styles.textoAçao}>08/03/2023   16:45:56</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className={styles.textoAçao}>Troca de Email</Table.Cell>
                            <Table.Cell className={styles.textoAçao}>08/03/2023   16:45:56</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className={styles.textoAçao}>Troca de Email</Table.Cell>
                            <Table.Cell className={styles.textoAçao}>08/03/2023   16:45:56</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className={styles.pagMescla} colSpan={4}>
                                <img className={styles.setaEsqu} src="/imagens/setaEsq.png"/>
                                <img className={styles.numeUm} src="/imagens/numUm.png"/>
                                <img className={styles.setaDire} src="/imagens/setaDir.png"/>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

        
        </div>

        {/* Footer */}

        <Footer className={styles.Ufooter}>
    <Container>
      <Content>
        <Column.Group centered>
          <Column size="one-third" mobile={{size: "full"}}>
            <div className={styles.UfooterCont}>
              <div>
                VISIONA TECNOLOGIA ESPACIAL S.A.
              </div>
              <div>
                2023 TODOS OS DIREITOS RESERVADOS
              </div>
            </div>
          </Column>
          <Column size="one-third" mobile={{size: "full"}}>
            <div className={styles.UfooterImgs}>
              <a href="https://www.facebook.com/VisionaEspacial">
                <img src="/imagens/facebook.png" alt="Facebook Visiona" />
              </a>
              <a href="https://www.linkedin.com/company/visiona-tecnologia-espacial-s-a-/">
                <img src="/imagens/linkedin.png" alt="Linkedin Visiona" />
              </a>
              <a href="https://www.visionaespacial.com.br/">
                <img src="/imagens/email.png" alt="Email Visiona" />
              </a>
              <a href="https://github.com/LittleTech10">
                <img src="/imagens/git.png" alt="Github Littletech" />
              </a>
            </div>
          </Column>
        </Column.Group>
      </Content>
    </Container>
    </Footer>
        </div>
  

        </>
    )
}

export default PaginaUsuario