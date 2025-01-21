import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

function Footer(){
    return(
        <MDBFooter className=' footer container-fluid text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4 '>
       

     
     

        <section className='mb-4'>
          
        </section>

        
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2025 Subscription Expense tracker.All rights Reserved
        
       
        
      </div>
    </MDBFooter>
    );
}
export default Footer