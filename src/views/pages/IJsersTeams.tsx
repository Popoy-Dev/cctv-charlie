import React from 'react'
import {Link} from 'react-router-dom'
const UsersTeams = () => {    
    return (
        <div id="page-wrapper">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">Users/Teams</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <p>
                        <Link className="btn btn-primary" to="create-user">+ Invite Users</Link>
                    </p>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Users List
                        </div>
                        <div className="panel-body">
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                                    <thead>
                                        <tr>
                                            <th>Full Name</th>
                                            <th>Role</th>
                                            <th>Team</th>
                                            <th>Last Visited</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="odd gradeX">
                                            <td>Charlie Bachiller</td>
                                            <td>Adminstrator</td>
                                            <td>Team A</td>
                                            <td>November 5, 2021</td>

                                        </tr>
                                        <tr className="odd gradeX">
                                            <td>Jose Rizal</td>
                                            <td>Adminstrator</td>
                                            <td>Team B</td>
                                            <td>November 1, 2021</td>

                                        </tr>
                                        <tr className="odd gradeX">
                                            <td>George George</td>
                                            <td>Adminstrator</td>
                                            <td>Team D</td>
                                            <td>November 1, 2021</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <p>
                       <Link className="btn btn-primary" to="/create-team" role="button">+ Create  Team</Link>
                    </p>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Teams List
                        </div>
                        <div className="panel-body">
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Adminstrator</th>
                                            <th>Members</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="odd gradeX">
                                            <td>Team A</td>
                                            <td>Mini box</td>
                                            <td>3 Members</td>
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

export default UsersTeams