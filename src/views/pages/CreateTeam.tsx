import React from 'react'


const CreateTeam = () => {
    return (
        <div id="page-wrapper">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">New Team</h1>
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
                                    <form >

                                        <div className="form-group">
                                            <label>Name</label>
                                            <input className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>Description</label>
                                            <textarea className="form-control" rows={3}></textarea>
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

export default CreateTeam