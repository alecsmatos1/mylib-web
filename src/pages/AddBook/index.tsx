import React from 'react';
import NavBar from '../../components/NavBar';
import {
  AddBookContainer,
  BookPreviaImg,
  ConfirmButtonRegister,
  ContentForm,
  ContentRegisterBook,
  GroupInputOneColumn,
  ThreeColumnsInput,
  TitleAddBookContainer,
  TwoColumnsInput,
} from './styles';
import BookExamplePng from '../../assets/bookExemple.png';

const AddBook: React.FC = () => {
  return (
    <>
      <NavBar />
      <AddBookContainer>
        <TitleAddBookContainer>
          <h1>Adicionar Livros</h1>
          <button type="button">Import CSV</button>
        </TitleAddBookContainer>

        <ContentRegisterBook>
          <BookPreviaImg src={BookExamplePng} />
          <ContentForm>
            <GroupInputOneColumn>
              <span>Título</span>
              <input
                type="text"
                placeholder="Ex. Alice nos País das Maravilhas"
              />
            </GroupInputOneColumn>

            <ThreeColumnsInput>
              <GroupInputOneColumn>
                <span>Categoria</span>
                <input type="text" placeholder="Ação" />
              </GroupInputOneColumn>

              <GroupInputOneColumn>
                <span>Ano</span>
                <input type="text" placeholder="Ex. 1998" />
              </GroupInputOneColumn>

              <GroupInputOneColumn>
                <span>Editora</span>
                <input type="text" placeholder="Ex. Athena" />
              </GroupInputOneColumn>
            </ThreeColumnsInput>

            <TwoColumnsInput>
              <GroupInputOneColumn>
                <span>Autor</span>
                <input type="text" placeholder="Ex. Rick Rioardan" />
              </GroupInputOneColumn>

              <GroupInputOneColumn>
                <span>Páginas</span>
                <input type="text" placeholder="Ex. 666" />
              </GroupInputOneColumn>
            </TwoColumnsInput>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <ConfirmButtonRegister>Registrar</ConfirmButtonRegister>
            </div>
          </ContentForm>
        </ContentRegisterBook>
      </AddBookContainer>
    </>
  );
};

export default AddBook;
