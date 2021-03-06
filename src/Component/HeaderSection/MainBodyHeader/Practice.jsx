    import React from 'react';
    import {Form,FormGroup} from 'react-bootstrap';
    import ClearIcon from '@material-ui/icons/Clear';
    import FacebookIcon from '@material-ui/icons/Facebook';
    import TwitterIcon from '@material-ui/icons/Twitter';
    import "./Practice.css"

   const currTime = new Date().toLocaleTimeString();
   const currDate = new Date().toLocaleDateString();

        export const Practice = () => {
            return (
                
                <div className="cr7">
                <Form className="login-form">
                <button className="can">< ClearIcon /></button>
                    <h1 className="in">General Sign in</h1>
                    <br/>
                <FormGroup>
                    <label className="name"> User Email</label>
                    <br/>
                    <input type="Email" placeholder="Enter Your Email" />
                </FormGroup>
                <FormGroup>
                <label className="user">User Name</label>
                    <br/>
                    <input type="text" placeholder="Enter Your Name" />
                </FormGroup>
             {/* <Form.Group className="accept">
                 <Form.Check type="checkbox" label="Accept Terms & condition" />
                 </Form.Group> */}
            <button className="google">Sign in with twitter <TwitterIcon/> </button>
            <br/><br/>
            <button className="google">Sign in with Facebook <FacebookIcon/> </button>  
            
    <br/><br/><br/>

           <p className="time">current time is = {currTime} </p>
           <p className="date">current Date is = {currDate} </p>

               </Form>
            </div>
            
        );
    };

