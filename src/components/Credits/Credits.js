import styled from "styled-components";

export const Title = styled.h4`
   color: #ffffff;
   font-size: 28px;
   font-weight: 700;
`

export const Container = styled.div`
   display: flex;
   margin-top: 30px;
   gap: 10px;
   overflow: hidden;

   div {
    display: flex;
    flex-direction: column;
   }

   p {
    color: #ffffff;
   }

   img {
    height: 200px;
   }

   @media (min-width: 768px) and (max-width: 900px) {
      margin-top: 10px;

      img {
         height: 150px;
      }
   }
`