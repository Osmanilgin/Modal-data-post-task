import { makeStyles } from '@mui/styles';
import styled from 'styled-components'

const useStyles = makeStyles({
    container: {
      backgroundColor: 'white',
    },
     wrapper: {
      display:"flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
     },
     select: {
       width: "30%",
       height: "57px",
       marginTop:"20px"
     },
     sent:{
     
       
     }
     
  })

    const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
    `
    const ModalBox = styled.div`
    border: 1px solid ;
    width: 60%;
    height: 80%;
    border-radius: 10px;
    `
    const Line = styled.div`
    display: flex;
    width: 100%;
    `
    const Header = styled.div`
    background-color: #EAEAEA;
    padding: 20px;
    font-size: 20px;
    border-radius: 10px 10px 0 0;
    `
    const Button2 = styled.button`
    width: 100px;
    height: 40px;
    margin:20px;
    font-size:18px;
    color: #848484;
    background-color: #fff;
    border-radius: 5px;
    `
    const Button1 = styled.button`
    width: 300px;
    height: 40px;
    margin:20px;
    font-size:18px;
    background-color: #1E1E1E;
    color: #DADADA;
    border-radius: 5px;
    `
    const Button3 = styled.button`
    width: 100px;
    height: 40px;
    margin:20px;
    font-size:18px;
    background-color: #1E1E1E;
    color: #DADADA;
    border-radius: 5px;
    `
    const BtnWrapper = styled.div`
    display:flex;
    border-top: 1px solid;
    justify-content: flex-end;

    
    `
  export  {useStyles, Container,BtnWrapper,Button3,Button1,Button2,Header,Line,ModalBox};