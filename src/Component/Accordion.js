import React from 'react';
import { Accordion, Button, Row } from 'react-bootstrap';
import {question} from './Data'



 const Accordionlist = ({data , deleteAlldata , deleteOneItem}) => {
  const datalocal = JSON.parse(localStorage.getItem("items"))
  const deleteoneitem = (ID) => {
    if (localStorage.getItem("items") != null){
    const index = question.findIndex((item)=> item.id === ID);
    question.splice(index, 1)}
    deleteOneItem(question);
  }
  
  return (
  <Row>
    <div className='col-sm-4'></div>
    <div className='col-sm-8'>
    <Accordion defaultActiveKey="0" >
    {localStorage.getItem("items") ? (datalocal.map((item , index)=>{
      return(
        <Accordion.Item key={index} eventKey={item.id}  >
        <div>
        <Accordion.Header className='text-center'>{item.q}</Accordion.Header>

        </div>
      <Accordion.Body className='d-flex justify-content-center' >
        <div>{item.a}</div>
        <Button variant="primary" onClick={()=>deleteoneitem(item.id)}>حذف عنصر</Button>
      </Accordion.Body>
    </Accordion.Item>
      )
    })) : (<h1>لا يوجد عناصر</h1>)}
  </Accordion>
  <Button onClick={deleteAlldata} className ='p-2 w-100' variant="primary" type="submit">
                     حذف الكل
                </Button>
    </div>
   
  </Row>
  )
}
export default Accordionlist;
