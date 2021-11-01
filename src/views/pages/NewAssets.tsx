import React from 'react'


const NewAssets = () => {

    return (

        <div id="page-wrapper">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">New Asset</h1>
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
                                    <form role="form">

                                        <div className="form-group">
                                            <label>Asset Name</label>
                                            <input className="form-control" />
                                        </div>


                                        <div className="form-group">
                                            <label>Location</label>
                                            <select className="form-control">
                                                <option>Philippines</option>
                                                <option>Japan</option>
                                                <option>USA</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Description</label>
                                            <textarea className="form-control" rows={3}></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label>Serial</label>
                                            <input className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>Model</label>
                                            <input className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>Manufacturer</label>
                                            <input className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Year</label>
                                            <input className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Teams in Charge</label>
                                            <select className="form-control">
                                                <option>Team A</option>
                                                <option>Team B</option>
                                                <option>Team X</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>QR/Bar code</label>
                                            <input className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label>QR/Bar code</label>
                                            <input className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Files</label>
                                            <input type="file"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Asset Type</label>
                                            <select className="form-control">
                                                <option>CCTV</option>

                                            </select>
                                        </div>


                                        <a className="btn btn-default" href="tables_assets.html" role="button">Save</a>
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

export default NewAssets