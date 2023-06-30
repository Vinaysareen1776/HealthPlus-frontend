import React from 'react';
import familyImage from '../familyImage.png';
import { useFormik } from 'formik';
import { basicSchema } from './basicSchema';
import AuthenticationService from '../services/AuthenticationService'
const onSubmit = async (values, actions) => {
       console.log(values);
       console.log(actions);
       await new Promise((resolve) => setTimeout(resolve, 1000));
       actions.resetForm();
     };
function Register() {

       const {
          
              errors,
              touched,
              isSubmitting,
              handleBlur,
              handleChange,
              handleSubmit,
            } = useFormik({
              initialValues: {
                     tel:"",
                     name: "",              
                email: "",
                age: "",
                password: "",
                confirmPassword: "",
              },
              validationSchema: basicSchema,
              onSubmit,
            });
            console.log(errors);
       return (
             <>
             <div className='registercontainer'>
                     <div className='registerimagecontainer'>
                     <img src={familyImage}  alt="familyImage"/>
                     </div>
                     <div className="mycontainer">
                            <div className="title">CREATE YOUR ACCOUNT</div>
                            <form onSubmit={handleSubmit} autoComplete="off">
                                   <div className="user__details">
                                          <div className="input__box">
                                                 <span className="details">Phone Number</span>
                                                 <input
                                                       id="tel"
                                                        type="tel"
                                                        onChange={handleChange}
                                                        placeholder="012-345-6789"
                                                        onBlur={handleBlur}
                                                        className={errors.tel && touched.tel ? "input-error" : ""}
                                                 />
                                                 {errors.tel && touched.tel && <p className="error">{errors.tel}</p>}
                                          </div>
                                          <div className="input__box">
                                                 <span className="details">Name</span>
                                                 <input id="name" type="text"  onChange={handleChange} placeholder="E.g: John Smith" onBlur={handleBlur}
                                                        className={errors.name && touched.name ? "input-error" : ""}/>
                                                        {errors.name && touched.name && <p className="error">{errors.name}</p>}
                                          </div>
                                          <div className='input__box items-flex'>
                                                 <div >
                                                        <span className="details">Email</span>
                                                        <input id="email" type="email"   onChange={handleChange} onBlur={handleBlur} className={errors.email && touched.email ? "input-error" : ""} placeholder="johnsmith@hotmail.com" required="" />
                                                        {errors.email && touched.email && <p className="error">{errors.email}</p>}
                                                 </div>
                                                 <div >
                                                        <span className="details">Date Of Birth</span>
                                                        <input id="date" type="date"  onChange={handleChange} onBlur={handleBlur} className={errors.date && touched.date ? "input-error" : ""} />
                                                        {errors.date && touched.date && <p className="error">{errors.date}</p>}
                                                 </div>
                                          </div>
                                          <div className="input__box">
                                                 <span className="details">Password</span>
                                                 <input type="password" id="password" onChange={handleChange} onBlur={handleBlur} className={errors.password && touched.password ? "input-errpr":""} placeholder="********" required="" />
                                                 {errors.password && touched.password && <p className="error">{errors.password}</p>}
                                          </div>
                                          <div className="input__box">
                                                 <span className="details">Confirm Password</span>
                                                 <input type="confirmPassword" id="confirmPassword" onChange={handleChange}onBlur={handleBlur} className={errors.confirmPassword && touched.confirmPassword ? "input-errpr":""}  placeholder="********" required="" />
                                                 {errors.confirmPassword && touched.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                                          </div>
                                   </div>
                                   <div className="gender__details">
                                          <input type="radio" name="gender" id="dot-1" />
                                          <input type="radio" name="gender" id="dot-2" />
                                          <input type="radio" name="gender" id="dot-3" />
                                          <span className="gender__title">Gender</span>
                                          <div className="category">
                                                 <label htmlFor="dot-1">
                                                        <span className="dot one" />
                                                        <span>Male</span>
                                                 </label>
                                                 <label htmlFor="dot-2">
                                                        <span className="dot two" />
                                                        <span>Female</span>
                                                 </label>
                                                 <label htmlFor="dot-3">
                                                        <span className="dot three" />
                                                        <span>Prefer not to say</span>
                                                 </label>
                                          </div>
                                   </div>
                                   <div className=" button">
                                          <input type="submit" disabled={isSubmitting}  defaultValue="Register" />
                                   </div>
                            </form>
                     </div>
              </div>
             </>
       );
}

export default Register;
