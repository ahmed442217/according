import { Container } from 'react-bootstrap';
import './App.css';
import Accordionlist from './Component/Accordion';
import FormQA from './Component/Form'
import {question} from './Component/Data'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [data , setData] = useState(question);
  const Additem = () =>{
    localStorage.setItem("items" , JSON.stringify([...question]))
    setData([...question])
    notify("تم الاضافة بنجاح" , "Success")
  }
  const deleteAlldata = () =>{
    localStorage.removeItem("items")
    question.splice(0 ,question.length )
    setData([])
  }
  const deleteOneItem = (question) =>{
    localStorage.setItem("items" , JSON.stringify([...question]))
    

    setData([...question])
    notify("تم الحذف بنجاح" , "Error")
    if (question.length<=0){
      deleteAlldata()
    }
  }
  console.log(data)
  const notify = (message,type) => {
   if (type === "Error")
    toast.error(message)
    else if (type === "Success")
    toast.success(message)
  }
  return (
    <Container>
      <FormQA Additem={Additem} />
      <Accordionlist data={data} deleteAlldata={deleteAlldata} deleteOneItem={deleteOneItem} />
      <ToastContainer />
      </Container>
  );
}

export default App;
