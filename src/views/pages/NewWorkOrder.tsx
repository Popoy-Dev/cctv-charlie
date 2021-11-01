import React from 'react'


const NewWorkOrder = () => {


    return (
        
        <div id="page-wrapper">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">New Work Order</h1>
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
                                    <form>

                                        <div className="form-group">
                                            <label>What Needs to be done?</label>
                                            <input className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>Attache Files</label>
                                            <input type="file" />
                                        </div>
                                        <div className="form-group">
                                            <label>Description</label>
                                            <textarea className="form-control" rows={3}></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label>Assign To</label>
                                            <select className="form-control">
                                                <option>Philippines</option>
                                                <option>Japan</option>
                                                <option>USA</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Due Date</label>
                                            <input className="form-control" />
                                        </div>



                                        <div className="form-group">
                                            <label>Priority</label>
                                            <div className="radio">
                                                <label>
                                                    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked />None
                                                </label>
                                            </div>
                                            <div className="radio">
                                                <label>
                                                    <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />Low
                                                </label>
                                            </div>
                                            <div className="radio">
                                                <label>
                                                    <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" />Medium
                                                </label>
                                            </div>
                                            <div className="radio">
                                                <label>
                                                    <input type="radio" name="optionsRadios" id="optionsRadios4" value="option3" />High
                                                </label>
                                            </div>
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
                                            <label>Asset</label>
                                            <select className="form-control">
                                                <option>AID Camera - 0001</option>
                                                <option>AID Camera - 0002</option>
                                                <option>AID Camera - 0003</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Attache Files</label>
                                            <input type="file" />
                                        </div>
                                        <div className="form-group">
                                            <label>Categories</label>
                                            <select className="form-control">
                                                <option>Damage</option>
                                                <option>Electrical</option>
                                                <option>Inspection</option>
                                                <option>Mechanical</option>
                                                <option>Project</option>
                                                <option>Refrigeration</option>
                                                <option>Safety</option>
                                                <option>SOP</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Vendor</label>
                                            <select className="form-control">
                                                <option>Vendor - 0001</option>
                                                <option>Vendor - 0002</option>
                                                <option>Vendor - 0003</option>
                                            </select>
                                        </div>
                                        <a className="btn btn-default" href="tables_workorder.html" role="button">Save</a>
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

export default NewWorkOrder