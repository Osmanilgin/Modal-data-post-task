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
   const classes = useStyles()
   const [selectedTab, setSelectedTab] = useState(0);

    const [data, setData]= useState({
      name: '',
      email: '',
      date: '',
      time: '',
   
    });

    const [day,setDay] = useState('')
    const [open, setOpen] = useState(false)
    const [format, setFormat] = useState('')
    const [click,setClick] = useState(false)
   
    const handleFormat = (event) => {setFormat(event.target.value)};
    const handleSelect = (event) => {setDay(event.target.value);};
    const handleChange = (event, newValue) => {setSelectedTab(newValue);};
    const handleOpen = () => setOpen(true);
    const handleClose = () =>{setOpen(false); setClick(false)};


    function handle(e) {
      const newdata = {...data}
      newdata[e.target.id] = e.target.value;
      setData(newdata);
      console.log(newdata);
    }

    useEffect(() => {
      setDay('')
      data.time=''
      data.date= ''
    }, [selectedTab])

    const Submit = (e) => {
      e.preventDefault()
      setClick(true)
       
        Axios.post(url,{
            name : data.name ,
            email: data.email,
            format: format,
            time: data.time,
            date: data.date,
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
         onChange={e => handle(e)} value={data.name} 
        id="name" label="Sharable report" variant="outlined"/>
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
          onChange={e => handle(e)} value={data.email} 
          id="email" label="client@company.com" variant="outlined"/>
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
         onChange={e => handle(e)} value={data.date} id="date" type="date" variant="outlined"/>
         <Typography sx={{margin:"30px 30px 0 30px"}}>  at </Typography>
          <TextField
         sx={{margin:"20px",width:"30%",display:"flex",}} 
         onChange={e => handle(e)} value={data.time} id="time" type="time" variant="outlined"/></Line> }
        {selectedTab == 2 && <Line>  <Typography sx={{margin:"30px 30px 0 30px"}}>  Everyday at </Typography>
         <TextField sx={{margin:"20px",width:"30%",display:"flex",}} 
        onChange={e => handle(e)} value={data.time} id="time" type="time" variant="outlined"/></Line> }
        {selectedTab == 3 && <Line>  <Typography sx={{margin:"30px 30px 0 30px"}}>  Every </Typography>
        <InputLabel id="demo-simple-select-label"></InputLabel>

        <Select className={classes.select}
          labelId="demo-simple-select-label"
          id="day"
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
          <TextField onChange={e => handle(e)} value={data.time} id="time" type="time"
         sx={{margin:"20px",width:"30%",display:"flex",}} 
         variant="outlined"/></Line>}
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
