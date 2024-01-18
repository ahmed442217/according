import React, { useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap';
import {question} from './Data'

 const FormQA = ({Additem}) => {
  const [qa , setQa] = useState();
  const [an , setAn] = useState();
  const newitem = () =>{
    question.push({id:Math.random(),q:qa , a:an})
    setQa('')
    setAn('')
    Additem()
  }

  return (
    <Row className='my-3'>
        <div className='col-sm-4'>
            <h2 className='fs-20'> أسئلة وإجوبة شائعة</h2>
        </div>
        <div className='col-sm-3'>
        <Form.Control value={qa} className ='p-2 text-center' onChange={(e)=>setQa(e.target.value)} type="text" placeholder="السؤال" />
        </div>
        <div className='col-sm-3'>
        <Form.Control value={an}   className ='p-2 text-center' onChange={(e)=>setAn(e.target.value)} type="text" placeholder="الأجابة" />
        </div>
        <div className='col-sm-2'>
                <Button className ='p-2 w-100' onClick={newitem} variant="primary" type="submit">
                     أضافة
                </Button>
            </div>

   
    
    </Row>
  )
}
export default FormQA; 
