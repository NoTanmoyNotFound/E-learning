import React from 'react'

function Payment() {

    let data ={
        name: "sun",
        amount : 1,
        number : "1234567890",
        MID: 'MID' + Date.now(),
        transactionId: 'T' + Date.now(),
    }

    
    const handelClick = async(event) =>{

     try {
      const amount = 500;
    const currency = "INR"
    const reciptId = "R" + Date.now()

        const res = await fetch(`/api/pay/payment`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount, 
                currency, 
                receipt: reciptId
        })
          }); 
          
          const order = await res.json();
          console.log(order);

          
      var option = {
        key:"",
        amount,
        currency,
        name:"Readx",
        description: "Learn with us",
        image:"./op_logo.png",
        order_id:order.id,
        handler: async function(response) {
          
          const body = {...response,}

          const validateResponse = await fetch('http://localhost:8000/api/pay/validate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)

          })

          const jsonResponse = await validateResponse.json();

          console.log('jsonResponse', jsonResponse);
        },
        // customer dit 
        prefill: {
          name: "Web Coder", 
          email: "webcoder@example.com",
          contact: "9000000000", 
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      }

      var rzp1 = new Razorpay(option);
      rzp1.on("payment.failed", function(response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      })

      rzp1.open();
      event.preventDefault();

        
     } catch (error) {
        console.log(error);
     }
    }











  return <button className=' p-4 w-72 text-2xl rounded-lg font-bold m-5 bg-[#0051ff]' onClick={handelClick}> Payment </button>
 
  
}

export default Payment
