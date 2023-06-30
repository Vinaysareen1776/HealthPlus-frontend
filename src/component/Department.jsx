import React from 'react'
import s1 from '../assets/images/s1.png';
import s2 from '../assets/images/s2.png';
import s3 from '../assets/images/s3.png';
import s4 from '../assets/images/s4.png';
const Department = () => {
  return (
       <section class="department_section layout_padding">
       <div class="department_container">
         <div class="container ">
           <div class="heading_container heading_center">
             <h2>
               Our Departments
             </h2>
             <p>
             Each department is staffed by a dedicated team of healthcare professionals who specialize in their respective fields
             </p>
           </div>
           <div class="row">
             <div class="col-md-3">
               <div class="box ">
                 <div class="img-box">
                   <img src={s1} alt="" />
                 </div>
                 <div class="detail-box">
                   <h5>
                     Cardiology
                   </h5>
                   <p>
                     fact that a reader will be distracted by the readable page when looking at its layout.
                   </p>
                 </div>
               </div>
             </div>
             <div class="col-md-3">
               <div class="box ">
                 <div class="img-box">
                   <img src={s2} alt="" />
                 </div>
                 <div class="detail-box">
                   <h5>
                     Diagnosis
                   </h5>
                   <p>
                     fact that a reader will be distracted by the readable page when looking at its layout.
                   </p>
                 </div>
               </div>
             </div>
             <div class="col-md-3">
               <div class="box ">
                 <div class="img-box">
                   <img src={s3} alt="" />
                 </div>
                 <div class="detail-box">
                   <h5>
                     Surgery
                   </h5>
                   <p>
                     fact that a reader will be distracted by the readable page when looking at its layout.
                   </p>
                 </div>
               </div>
             </div>
             <div class="col-md-3">
               <div class="box ">
                 <div class="img-box">
                   <img src={s4} alt="" />
                 </div>
                 <div class="detail-box">
                   <h5>
                     First Aid
                   </h5>
                   <p>
                     fact that a reader will be distracted by the readable page when looking at its layout.
                   </p>
                 </div>
               </div>
             </div>
           </div>
           <div class="btn-box">
             <a href="">
               View All
             </a>
           </div>
         </div>
       </div>
     </section>
  )
}

export default Department