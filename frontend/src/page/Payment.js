import React from 'react'

function Payment() {

    let data ={
        name: "sun",
        amount : 1,
        number : "1234567890",
        MID: 'MID' + Date.now(),
        transactionId: 'T' + Date.now(),
    }
    const handelClick = () =>{

     try {

        const res = fetch(`/api/pay/payment`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });   

        
     } catch (error) {
        console.log(error);
     }
    }











  return( 
    <div className='w-full'>
  <button className=' p-4 w-72 text-2xl rounded-lg font-bold m-5 bg-[#0051ff]' onClick={handelClick}> Payment </button>
  </div>
  )
}

export default Payment
