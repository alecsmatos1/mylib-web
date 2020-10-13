import React, { useRef } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import {
  Container,
  ContainerTitle,
  Form,
  BookContainer,
  BookContainerExtra,
} from './styles';
import bookCaseBackground from '../../assets/bookcaseBackground.svg';
import booksBackground from '../../assets/booksBackground.svg';
import bookExemple from '../../assets/bookExemple.png';
import Navbar from '../../components/NavBar';

const Dashboard: React.FC = () => {
  let distancia = 0;
  let intervalo = 0;
  const arr = [
    { title: 'Os 7 hábitos dos Adolescentes Altamente eficiêntes' },
    { title: 'Os 6 hábitos dos Adolescentes Altamente eficiêntes' },
    { title: 'Os 5 hábitos dos Adolescentes Altamente eficiêntes' },
    { title: 'Os 4 hábitos dos Adolescentes Altamente eficiêntes' },
    { title: 'Os 3 hábitos dos Adolescentes Altamente eficiêntes' },
    { title: 'Os 2 hábitos dos Adolescentes Altamente eficiêntes' },
    { title: 'Os 1 hábitos dos Adolescentes Altamente eficiêntes' },
    { title: 'Os 0 hábitos dos Adolescentes Altamente eficiêntes' },
    { title: '2' },
    { title: '3' },
    { title: '4' },
    { title: '5' },
    { title: '6' },
    { title: '7' },
    { title: '8' },
    { title: '9' },
    { title: '10' },
    { title: '11' },
    { title: '12' },
    { title: '13' },
    { title: '14' },
    { title: '15' },
    { title: '16' },
    { title: '17' },
    { title: '18' },
    { title: '19' },
    { title: '20' },
  ];

  const handleScroll = useRef<any>();

  function sideScroll(
    direction: string,
    speed: number,
    distance: number,
    step: number,
  ) {
    if (distancia === 0) {
      intervalo = setInterval(() => {
        if (direction === 'left') {
          handleScroll.current.scrollLeft += step;
        } else {
          handleScroll.current.scrollLeft -= step;
        }
        distancia += 1;
        if (distancia >= distance) {
          window.clearInterval(intervalo);
          distancia = 0;
        }
      }, speed);
    }
  }

  return (
    <>
      <Navbar />
      <Container>
        <img className="books" src={booksBackground} alt="Books" />
        <ContainerTitle>
          <h1>Tenha seus livros catalogados e salvos na sua biblioteca</h1>
          <text>Cadastre seus livros e os organiza da forma que quiser</text>
        </ContainerTitle>
        <img src={bookCaseBackground} alt="BookCase" />
      </Container>
      <Form>
        <input placeholder="Digite o nome do livro" />
        <button type="submit">Pesquisar</button>
      </Form>
      <text
        style={{
          fontSize: 20,
          color: '#3d3d4d',
          marginLeft: '100px',
          fontWeight: 'bold',
        }}
      >
        Auto-Ajuda
      </text>
      <BookContainerExtra>
        <button
          type="button"
          id="right"
          onClick={() => sideScroll('right', 25, 50, 5)}
        >
          <FiChevronLeft size={100} color="#93939B" />
        </button>

        <BookContainer ref={handleScroll}>
          {arr.map(book => (
            <div>
              <img src={bookExemple} alt="BookCase" />
              <text>{book.title}</text>
            </div>
          ))}
        </BookContainer>
        <button
          type="button"
          id="left"
          onClick={() => sideScroll('left', 25, 50, 5)}
        >
          <FiChevronRight size={100} />
        </button>
      </BookContainerExtra>
      <text
        style={{
          fontSize: 20,
          color: '#3d3d4d',
          marginLeft: '100px',
          fontWeight: 'bold',
        }}
      >
        Ação
      </text>
      <BookContainerExtra>
        <button type="button">
          <FiChevronLeft size={100} color="#93939B" />
        </button>
        <BookContainer>
          {arr.map(book => (
            <div>
              <img src={bookExemple} alt="BookCase" />
              <text>{book.title}</text>
            </div>
          ))}
        </BookContainer>
        <button type="button">
          <FiChevronRight size={100} />
        </button>
      </BookContainerExtra>
    </>
  );
};

export default Dashboard;
