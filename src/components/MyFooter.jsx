import { Component } from "react";
import {Table, Button} from 'react-bootstrap'

class MyFooter extends Component {
    render(){
        return(
        <div className="mt-4 bg-dark text-white">
            <div className="container">
                <table className="table main-color text-white table-borderless text-left">
                    <thead>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Media Center</td>
                            <td>Investor Relations</td>
                            <td>Jobs</td>
                            <td>Terms of Use</td>
                        </tr>
                        <tr>
                            <td>Privacy</td>
                            <td>Legal Notices</td>
                            <td>Cookie Preferences</td>
                            <td>Corporate Information</td>
                        </tr>
                        <tr>
                            <td>
                            <button type="button" className="btn btn-outline-light">Contact Us</button>
                            </td>
                        </tr>        
                    </tbody>
                </table>  
            </div>
        </div>)}}
        
        export default MyFooter