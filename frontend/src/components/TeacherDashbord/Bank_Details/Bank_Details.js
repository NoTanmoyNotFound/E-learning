import React, { useState, useEffect } from 'react'
import './Bank_Details.css'
import { useSelector } from 'react-redux';

const Bank_Details = () => {
    const { currentUser } = useSelector((state) => state.user);
    const [formData, setFormData] = useState({ teacher_id: currentUser._id, bank_holder_name: '', email:'', acc_number:'', ifce:'', branch_name:'', upi:'', ph_number:''});
    const [errors, setErrors] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {

        try {
            const res = await fetch("http://localhost:8000/api/teacher/paymentDetails", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                setFormData({ bank_holder_name: '', email:'', acc_number:'', ifce:'', branch_name:'', upi:'', ph_number:''});
            }
            setSuccess("Form submitted successfully!");
            setErrors(null);
        } catch (error) {
            console.error("Error occurred during fetch:", error);
            setErrors(error);
            setSuccess(null);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    console.log(formData);

    return (
        <div className='bank_main_details'>
            <div className="bank_inner">
                <form className="bank_form" onSubmit={handleSubmit}>
                    <div className="bank_sub">
                        <div className="b_sub1">
                            <label htmlFor="bank_holder_name" className="bank_label">Bank Holder Names <span className='text-red'>*</span></label>
                            <input className='bank_input' type="text" name='bank_holder_name' id='bank_holder_name' value={formData.bank_holder_name} onChange={handleChange} required/>
                        </div>
                        <div className="b_sub1">
                            <label htmlFor="email" className="bank_label">Email <span className='text-red'>*</span></label>
                            <input className='bank_input' type="email" name='email' id='email' value={formData.email} onChange={handleChange} required/>
                        </div>
                    </div>


                    <div className="bank_sub">
                        <div className="b_sub1">
                            <label htmlFor="acc_number" className="bank_label">Account Number <span className='text-red'>*</span></label>
                            <input className='bank_input' type="text" name='acc_number' id='acc_number' value={formData.acc_number} onChange={handleChange} required/>
                        </div>

                        <div className="b_sub1">
                            <label htmlFor="ifce" className="bank_label">IFCE Code <span className='text-red'>*</span></label>
                            <input className='bank_input' type="text" name='ifce' id='ifce' value={formData.ifce} onChange={handleChange} required/>
                        </div>

                    </div>


                    <div className="bank_sub">
                        <div className="b_sub1">
                            <label htmlFor="branch_name" className="bank_label">Branch Name <span className='text-red'>*</span></label>
                            <input className='bank_input' type="text" name='branch_name' id='branch_name' value={formData.branch_name} onChange={handleChange} required/>
                        </div>

                        <div className="b_sub1">
                            <label htmlFor="upi" className="bank_label">UPI Number <span className='text-red'>*</span></label>
                            <input className='bank_input' type="text" name='upi' id='upi' value={formData.upi} onChange={handleChange} required/>
                        </div>
                    </div>

                    <label htmlFor="ph_number" className="bank_label">Phone Number <span className='text-red'>*</span></label>
                    <input className='bank_input' type="text" name='ph_number' id='ph_number' value={formData.ph_number} onChange={handleChange} required/>

                    <button className='button3'>SUBMIT</button>

                    {success && <p className="success">{success}</p>}
                    {errors && <p className="error">{errors}</p>}
                </form>
            </div>
        </div>
    )
}

export default Bank_Details
