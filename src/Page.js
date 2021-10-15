import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { FormControlLabel, InputLabel, Modal, Radio, RadioGroup, Typography } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {useStyles, Container,BtnWrapper,Button3,Button1,Button2,Header,Line,ModalBox} from './Styles';
import Axios from "axios"


 const url = "https://postman-echo.com/post"

function Page() {
    const [selectedTab, setSelectedTab] = useState(0);
    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [date,setDate] = useState('');
    const [open, setOpen] = useState(false);
    const [time,setTime] = useState('');
    const classes = useStyles();
    const handleOpen = () => setOpen(true);
    const handleClose = () =>{setOpen(false); setClick(false)};
    const [day, setDay] = useState('');
    const [format, setFormat] = useState('')
    const [click,setClick] = useState(false)
   
    const handleFormat = (event) => {setFormat(event.target.value)};
    const handleSelect = (event) => {setDay(event.target.value);};
    const handleChange = (event, newValue) => {setSelectedTab(newValue);};
     

    useEffect(() => {
      setDay('')
      setTime('')
      setDate('')
    }, [selectedTab])

    const Submit = (e) => {
      setClick(true)
       
        Axios.post(url,{
            name : name ,
            email: email,
            format: format,
            time: time,
            date: date,
            day: day
     
        }).then(res=>{
         
          console.log(res)
         
        }).catch(err => console.error(err))    };
  
    return (
        <>
        
      <Container>
         <Button1 onClick={handleOpen}>Open modal</Button1>
      
         <Modal className={classes.wrapper}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
         <ModalBox  className={classes.container}>
          <Header> Export Report</Header>
            <Line>
       <Typography sx={{margin:"30px"}}>  Report name</Typography>
        <TextField sx={{margin:"20px 10px 0 0",width:"70%",display:"flex"}} type="text"
         onChange={e => setName(e.target.value)} value={name}
        id="outlined-basic" label="Sharable report" variant="outlined"/>
        </Line>
        <Line>
       <Typography sx={{margin:"20px"}}>  Format</Typography>
       <RadioGroup sx={{marginLeft:"70px"}} row aria-label="gender" 
       value={format} onChange={handleFormat} name="row-radio-buttons-group">
        <FormControlLabel value="Excel" control={<Radio />} label="Excel" />
        <FormControlLabel value="CSV" control={<Radio />} label="CSV" />
   
      
      </RadioGroup>
        </Line>
        <Line>
       <Typography sx={{margin:"30px"}}>  E-mail to</Typography>
        <TextField sx={{margin:"20px 0 0  30px", width:"70%",display:"flex"}} type="text"
         onChange={e => setEmail(e.target.value)} value={email}
        id="outlined-basic" label="client@company.com" variant="outlined"/>
        </Line>
        <Line>
       <Typography sx={{margin:"30px 30px 0 30px"}}>  Schedule</Typography>
       <Tabs sx={{margin:"20px 0 0 30px"}} value={selectedTab} onChange={handleChange} 
       aria-label="basic tabs example">
          <Tab label="No repeat"  />
          <Tab label="Specific Date" />
          <Tab label="Daily" />
          <Tab label="Weekly" />
        </Tabs>
        </Line>
        {selectedTab == 0 && <div style={{height:"100px"}} ></div>}
        {selectedTab == 1 && <Line>  <Typography sx={{margin:"30px 30px 0 30px"}}>  Date </Typography>
         <TextField sx={{margin:"20px",width:"30%",display:"flex",}} 
        id="outlined-basic" onChange={e => setDate(e.target.value)} value={date} type="date" variant="outlined"/>
         <Typography sx={{margin:"30px 30px 0 30px"}}>  at </Typography>
          <TextField
         sx={{margin:"20px",width:"30%",display:"flex",}} 
        id="outlined-basic"  onChange={e => setTime(e.target.value)} value={time} type="time" variant="outlined"/></Line> }
        {selectedTab == 2 && <Line>  <Typography sx={{margin:"30px 30px 0 30px"}}>  Everyday at </Typography>
         <TextField sx={{margin:"20px",width:"30%",display:"flex",}} 
        id="outlined-basic" type="time" onChange={e => setTime(e.target.value)} value={time} variant="outlined"/></Line> }
        {selectedTab == 3 && <Line>  <Typography sx={{margin:"30px 30px 0 30px"}}>  Every </Typography>
        <InputLabel id="demo-simple-select-label"></InputLabel>

        <Select className={classes.select}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={day}

          onChange={handleSelect}
        >
          <MenuItem value="Monday">Monday</MenuItem>
          <MenuItem value="Tuesday">Tuesday</MenuItem>
          <MenuItem value="Wednesday">Wednesday</MenuItem>
          <MenuItem value="Thursday">Thursday</MenuItem>
          <MenuItem value="Friday">Friday</MenuItem>
          <MenuItem value="Saturday">Saturday</MenuItem>
          <MenuItem value="Sunday">Sunday</MenuItem>
      
        </Select>
         <Typography sx={{margin:"30px 30px 0 30px"}}>  at </Typography>
          <TextField onChange={e => setTime(e.target.value)} value={time}
         sx={{margin:"20px",width:"30%",display:"flex",}} 
        id="outlined-basic" type="time" variant="outlined"/></Line>}
        <BtnWrapper>
        <Typography sx={{display: `${(click ? "flex" : "none")}`, color: "#5ACF6D",width:"50%",margin:"20px",fontSize:"20px"}}
         align="left"        >  Submission has been sent! </Typography>
        <Button2  onClick={handleClose}> CANCEL</Button2><Button3 onClick={(e)=>Submit(e)}> OK</Button3></BtnWrapper>
        </ModalBox>
      </Modal>
     
      </Container>
       
        </>
    )
}

export default Page
