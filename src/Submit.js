import React from 'react';
import './App.css';
const Submit = ({
  cname,
  cage,
  cemail
})=>{

  return( 
    <form>
      <div className="table-responsive text-center">
        <i className="fa fa-user-circle fa-customize mb-4" aria-hidden="true"></i>
        <table className="table" id="info">
          <tbody>
            <tr>
              <td>Name</td>
              <td>:</td>
              <td>{cname}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>:</td>
              <td>{cage}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>:</td>
              <td>{cemail}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  )
}

export default Submit;