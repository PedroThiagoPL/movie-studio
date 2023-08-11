import styled from "styled-components";

export const Background = styled.div`
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 767px) {
    height: 100%;

    &::before {
      height: 165%;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  max-width: 1500px;
  
  padding-top: 150px;

  @media (max-width: 767px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const Info = styled.div`
  z-index: 2;
  padding: 20px;
  width: 50%;

  h1 {
    font-size: 4rem;
    font-weight: 700;
    color: #ffffff;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) and (max-width: 900px) {
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-bottom: 50px;
  }

  h1 {
    font-size: 2.1rem;
  }

  p {
    font-size: 1rem;
  }
`

export const ContainerButton = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 767px) {
    justify-content: center;
  }
`

export const Poster = styled.div`
  z-index: 2;

  img {
    width: 350px;
    border-radius: 10px;
    z-index: 3;
  }

  @media (min-width: 768px) and (max-width: 900px) {
    img {
      width: 300px;
      height: 70vh;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    padding-bottom: 50px;
  }
`
