import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { userInfoStart, userInfoSuccess, userInfoFailure } from "../redux/user/localSlice";

function Payment({courseId,price, teacherEmail,teacherName}) {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);

    
    const handelClick = async(event) =>{

     try {
      const userId = currentUser._id;
      const uaerName = currentUser.name;
      const userEmail = currentUser.email;
    
 
    const amount = price*100;
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
          
          const body = {...response,userId,uaerName,userEmail,price,courseId, teacherName, teacherEmail};

          const validateResponse = await fetch('http://localhost:8000/api/pay/validate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)

          })

          const jsonResponse = await validateResponse.json();
          
          if (jsonResponse.success === false) {
            dispatch(userInfoFailure(jsonResponse.message));
            return;
        }
          dispatch(userInfoSuccess(jsonResponse));
          console.log('jsonResponse', jsonResponse);
        },
        // customer dit 
        prefill: {
          name: uaerName, 
          email: userEmail,
          contact: "9000000000", 
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      }
      console.log(option);

      var rzp1 = new window.Razorpay(option);
      rzp1.on("payment.failed", function(response) {
        alert("this is code" + response.error.code);
        alert("this is dis" +response.error.description);
        alert("this is source" + response.error.source);
        alert("this is step" + response.error.step);
        alert("this is reson" + response.error.reason);
        alert("this is mark" + response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      })

      rzp1.open();
      event.preventDefault();

        
     } catch (error) {
        console.log(error);
     }
    }











  return <button className="w-100 button3" onClick={handelClick}> Payment </button>
 
  
}

export default Payment
