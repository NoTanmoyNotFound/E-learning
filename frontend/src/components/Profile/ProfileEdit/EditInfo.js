import React from 'react';
import './ProfileEdit.css';



function EditInfo() {


    return (
        <div>
            {/* <div className="tab-pane fade" id="account-info">
    <div className="card-body pb-2">
        <div className="form-group">
            <label className="form-label">Bio</label>
            <textarea className="form-control" rows="5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc arcu, dignissim sit amet sollicitudin iaculis, vehicula id urna. Sed luctus urna nunc. Donec fermentum, magna sit amet rutrum pretium, turpis dolor molestie diam, ut lacinia diam risus eleifend sapien. Curabitur ac nibh nulla. Maecenas nec augue placerat, viverra tellus non, pulvinar risus.</textarea>
        </div>
        <div className="form-group">
            <label className="form-label">Birthday</label>
            <input type="text" className="form-control" defaultValue="May 3, 1995" />
        </div>
        <div className="form-group">
            <label className="form-label">Country</label>
            <select className="custom-select">
                <option>USA</option>
                <option selected>India</option>
                <option>UK</option>
                <option>Germany</option>
                <option>France</option>
            </select>
        </div>
    </div>
    <hr className="border-light m-0" />
    <div className="card-body pb-2">
        <h6 className="mb-4">Contacts</h6>
        <div className="form-group">
            <label className="form-label">Phone</label>
            <input type="text" className="form-control" defaultValue="+0 (123) 456 7891" />
        </div>
        <div className="form-group">
            <label className="form-label">Website</label>
            <input type="text" className="form-control" defaultValue="" />
        </div>
    </div>
</div> */}

            <div className="p-4">
                <div className="Bio">
                    <label className="form-label">Bio</label>
                    <textarea className="form-control" rows="5"></textarea>
                </div>

                <div className="form-group">
                    <label className="form-label">Birthday</label>
                    <input type="text" className="form-control" defaultValue="" />
                </div>


                <div className="form-group">
                    <label className="form-label">Country</label>
                    <select className="custom-select">
                        <option>USA</option>
                        <option selected>India</option>
                        <option>UK</option>
                        <option>Germany</option>
                        <option>France</option>
                    </select>
                </div>

                <div className="card-body pb-2">
                    <h6 className="mb-4">Contacts</h6>
                    <div className="form-group">
                        <label className="form-label">Phone</label>
                        <input type="text" className="form-control" defaultValue="" />
                    </div>
                    
                </div>
                <div className="form-group flex items-center justify-center p-2 mb-0">
                            <button
                                type='submit'
                                className='SubmitButton border border-black w-24 pt-3 pb-3 bg-blue-600 text-white rounded-md'
                            > Submit
                            </button>

                        </div>
                




            </div>





        </div>
    );
}

export default EditInfo;
