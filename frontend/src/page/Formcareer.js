import React , {useState} from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import figer from './assets/formfiger.png'

function Formcareer() {
    const navigate = useNavigate();
    const [inputdata, setInputdata] = useState({
        countryCode: "+91",
    })
    const [error, setError] = useState(null);
    const [success , setSuccess] = useState(null)
    const handelClick = () => {
        navigate("/careersuport")
    }



    const handelChange = (e) => {
        const { name, value } = e.target;
        setInputdata({ ...inputdata, [name]: value });

    }
    console.log(inputdata);



   


    const handelSubmit = async (e) => {
        e.preventDefault(); 

        const {email,name,experience,interested,number} = inputdata;


        try {

            if (!email) {
                setError("Enter your Email");
                console.log("Enter your Email");
                return;
            }
            else if (!name) {
                setError("Enter your name");
                
                return;
            }
            else if (!experience) {
                setError("Enter your experience");
            
                return;
            }
            else if (!interested) {
                setError("Enter your interested");
             
                return;
            }
            else if (!number) {
                setError("Enter your number");
             
                return;
            }


            else{

                const response = await fetch(`/api/user/careersupport`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(inputdata),
                })
                const data = await response.json();
                if (data.success === false) {
                    setError(data.message);
                } else {
                    setError(null);
                    setSuccess("your request has been sent successfully")
                    setTimeout(() => {
                        navigate("/careersuport")
                    }, 4000);
                    
                }
            }
            
        } catch (error) {
            
        }

    }











    

    const countryCodes = [
        { name: "(+91) India ", value: "+91" },
        { name: "(+1) United States ", value: "+1" },
        { name: "(+44) United Kingdom ", value: "+44" },
        { name: "(+61) Australia ", value: "+61" },
        { name: "(+1) Canada ", value: "+1" },
        { name: "(+49) Germany ", value: "+49" },
        { name: "(+33) France ", value: "+33" },
        { name: "(+86) China ", value: "+86" },
        // Add more country codes as needed
    ];


    return (
        <div className='h-screen w-screen' style={{ backgroundColor: '#a4d6f5d9', height: '100vh' }} >

            <div onClick={handelClick} className='flex cursor-pointer items-center p-5 pb-0 sm:pb-5'>
                <div className='text-3xl pr-2'><FaArrowLeft /></div>
                <p className='text-3xl font-bold '>back</p>
            </div>




            <div className='flex flex-col justify-center items-center  text-center '>


            <div className="max-w-[960px] bg-[#ffffff] flex justify-center items-center gap-20 p-5 rounded-2xl ">
                <div id="ok" className="relative hidden md:block">
                    <img src={figer} alt="bacgroung" />
                    
                </div>




                <form action="" onSubmit={handelSubmit} className='bg-[#ffffff] w-2/3 rounded-xl p-5 pb-3 pt-3'>
                    <h1 className='text-4xl font-bold'>Schedule a counseling call</h1>
                    <p className='text-black text-lg mt-3'>Fill in the below details to receive a call from our program advisor</p>

                    <div>
                        <input type="text" required placeholder='Name' name='name' onChange={handelChange} className='border-2 border-[#cbcbcb] rounded-xl p-2 mt-3 w-full' />
                    </div>
                    <div>
                        <input type="email" required placeholder='Email' name='email' onChange={handelChange} className='border-2 border-[#cbcbcb] rounded-xl p-2 mt-3 w-full' />
                    </div>
                    <div className='flex flex-row'>
                        <select name="countryCode" onChange={handelChange}  required className="border-2 border-[#cbcbcb] rounded-l-xl p-2 mt-3 w-20">
                            {/* Map over the countryCodes array and render options */}
                            {countryCodes.map((country) => (
                                <option key={country.value} value={country.value}>{country.name}</option>
                            ))}
                        </select>
                        <input type="text" required placeholder='Mobile Number' onChange={handelChange}  name='number' className='border-2 border-[#cbcbcb] rounded-r-xl p-2 mt-3 w-full' />
                    </div>





                    <select name="experience" onChange={handelChange}  required="" className='border-2 border-[#cbcbcb] rounded-xl p-2 mt-3 w-full'>
                        <option value="" disabled="" selected="">Work Experience in years</option>
                        <option value="College Student">Currently a college student</option>
                        <option value="0 Years">0 Years</option>
                        <option value="<1 Year">&lt;1 Year</option>
                        <option value="1-2 Years">1-2 Years</option>
                        <option value="2-3 Years">2-3 Years</option>
                        <option value="3-5 Years">3-5 Years</option>
                        <option value="5-8 Years">5-8 Years</option>
                        <option value="8-12 Years">8-12 Years</option>
                        <option value="12-15 Years">12-15 Years</option>
                        <option value=">15 Years">&gt;15 Years</option>
                    </select>



                    <select  name="interested" onChange={handelChange}   required="" className='border-2 border-[#cbcbcb] rounded-xl p-2 mt-3 w-full'>
                        <option value="" disabled="" selected="">Select Domain</option>
                        <option value="artificial-intelligence">AI &amp; Machine Learning</option>
                        <option value="data-science">Data Science &amp; Business Analytics </option>
                        <option value="microsoft-programs">Microsoft Programs</option>
                        <option value="study-abroad">Study Abroad</option>
                        <option value="management">Management</option>
                        <option value="boot-camps">Bootcamps</option>
                        <option value="cloud-computing">Cloud Computing</option>
                        <option value="cyber-security">Cyber Security</option>
                        <option value="software-engineering">Software Development</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="design">Design</option>
                    </select>


                    <p className=' text-[#ff3939]'>{error ? error : ''}</p>
                    <p className=' text-[#ff3939]'>{success ? success : ''}</p>

                    <div>
                        <button type='submit' className='bg-[#3b45ff] text-white rounded-lg p-2 mt-3 w-36'>Schedule a call

                        </button>
                    </div>



                </form>

                </div>




            </div>























        </div>
    )
}

export default Formcareer
