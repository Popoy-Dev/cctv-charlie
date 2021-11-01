import React from 'react'
import {Link } from 'react-router-dom'
const TableAssets = () =>  {

    return (
        <div id="page-wrapper">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">Assets</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <p>
                       <Link className="btn btn-primary" to="/new-asset" role="button">+ New Asset</Link>
                    </p>

                    <div className="panel panel-default">

                        <div className="panel-heading">
                            List
                        </div>
                        <div className="panel-body">
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Asset Serial No</th>
                                            <th>Model</th>
                                            <th>Manufacturer</th>
                                            <th>Team InCharge</th>
                                            <th>Type</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="odd gradeX">
                                            <td>AID Camera - 21602</td>
                                            <td>21602</td>
                                            <td>CCTV 2000</td>
                                            <td>Panasonic</td>
                                            <td>Team A</td>
                                            <td>CCTV</td>
                                        </tr>
                                        <tr className="odd gradeX">
                                            <td>AID Camera - 112323</td>
                                            <td>112323</td>
                                            <td>CCTV 3000</td>
                                            <td>Lenovo</td>
                                            <td>Team C</td>
                                            <td>CCTV</td>
                                        </tr>
                                        <tr className="odd gradeX">
                                            <td>AID Camera - 2222</td>
                                            <td>2222</td>
                                            <td>CCTV 1000</td>
                                            <td>Sony</td>
                                            <td>Team B</td>
                                            <td>CCTV</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}

export default TableAssets