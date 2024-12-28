import { Button, Stack, TextField } from '@mui/material'
Button
import './App.css'
import { useState } from 'react'
function App() {
  const [interest,setInterest]=useState(0)
  const [principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)

  const [invalidprinciple,setInvalidPrinciple] = useState(false)
  const [invalidrate,setInvalidRate]=useState(false)
  const [invalidyear, setInvalidyear]=useState(false)

  const validateInput=(inputTag)=>{
    console.log(inputTag,typeof inputTag);
    const {name,value}=inputTag
    console.log(name,value);
    console.log(!!value.match(/^\d*.\d+$/));
    if(name==='principle'){
      setPrinciple(value)
      if(value.match(/^\d*.\d+$/)){
        setInvalidPrinciple(false)
      }else{
        setInvalidPrinciple(true)
      }
    }else if(name==='rate'){
      setRate(value)
      if(value.match(/^\d*.\d+$/)){
        setInvalidRate(false)
      }else{
        setInvalidRate(true)
      }
    }else if(name==='year'){
      setYear(value)
      if(value.match(/^\d*.\d+$/)){
        setInvalidyear(false)
      }else{
        setInvalidyear(true)
      }
    }
  }
  const handleCalculate=(e)=>{
    e.preventDefault()
    console.log('buttoncalcute');
    if(principle && rate && year){
      setInterest(principle*rate*year/100)
    }else{
      alert('Pleae Fill Form Completly')
    }
  }
  const handlereset=()=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInvalidPrinciple(false)
    setInvalidRate(false)
    setInvalidyear(false)
  }
  return (
    <>
      <div style={{ width: '100%', minHeight: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>
        <div className='bg-light p-5 rounded'>
          <h3>Simple Interest Calculator</h3>
          <p>Calculate your Simple Interest Easily</p>
          <div className='bg-warning p-5 rounded text-center'>
            <h1>₹ {interest}</h1>
            <p className='fw-bolder'>Total simple interest</p>
          </div>
          <form action="" className='mt-5'>
            {/* priciple amount */}
            <div className='mb-3'>
              <TextField value={principle || ""} name='principle' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-principle" label="₹ Principle Amount" variant="outlined" />
            </div>
            {/* invalid principle amount */}
            {invalidprinciple && <div className='text-danger fw-bolder mb-3'>
              Invalid Principle Amount
            </div>}
            {/* Rate */}
            <div className='mb-3'>
              <TextField value={rate || ""} name='rate' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-rate" label="% Rate" variant="outlined" />
            </div>
            {/* invalid rate */}
            {invalidrate && <div className='text-danger fw-bolder mb-3'>
              Invalid Rate
            </div>}
            {/* year */}
            <div className='mb-3'>
              <TextField value={year || ""} name='year' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-year" label="₹ Time period (Yr)" variant="outlined" />
            </div>
            {/* invalid year */}
            {invalidyear && <div className='text-danger fw-bolder mb-3'>
              Invalid Year
            </div>}
            {/* button */}
            <Stack direction="row" spacing={2}>
              <Button type='submit' onClick={handleCalculate} disabled={invalidprinciple || invalidrate || invalidyear} variant="contained" style={{width:'50%',height:'70px'}} className='bg-dark'>Calculate</Button>
              <Button onClick={handlereset} variant="outlined" style={{width:'50%',height:'70px',border:'black solid 1px',color:'black'}} >Reset</Button>
            </Stack>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
