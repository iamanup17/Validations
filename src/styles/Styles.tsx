import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  /* border:1px solid red; */
  /* overflow: scroll; */
  overflow-x: hidden;
  /* margin: 10px auto; */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* background: #ffffff; */
  background: #e1e4ee;
  color: #2d2d2d;
  font-family: "Poppins" !important;

  a {
    /* color:red; */
    text-decoration: none;
  }
  a:focus {
    color: blue;
  }
  a:active {
    text-decoration: none;
  }
  



`;
