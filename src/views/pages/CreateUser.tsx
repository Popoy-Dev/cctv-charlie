import React from 'react'


const CreateUser = () => {

    return (
        <div id="page-wrapper">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">Invite User</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Information
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <form  >

                                        <div className="form-group">
                                            <label>Full Name</label>
                                            <input className="form-control" placeholder="Full Name" />
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input className="form-control" placeholder="Email" />
                                        </div>

                                        <div className="form-group">
                                            <label>Account Type</label>
                                            <select className="form-control">
                                                <option>Administrator</option>
                                                <option>Full User</option>
                                                <option>Requester Only</option>
                                            </select>
                                        </div>


                                        <a className="btn btn-default" href="tables_usergroup.html" role="button">Save</a>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}

export default CreateUser