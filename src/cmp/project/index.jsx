import React from 'react';
import Layout from "../shared/layout/index";

const Index = () => {
  return (
    <Layout>
      <div className='mx-24 mt-4 space-y-4'>
        <div style={{height:"700px", width:"100%"}} className='flex flex-row gap-4'>
          <div className='flex flex-col justify-between'>
            <div className='border-2 border-inherit border-solid rounded-md' style={{height:"340px",width:"420px"}}>
              {/* Wrap the image with an anchor tag */}
              <a href='https://chennaitaxiservice.com/' target='_blank' rel='noopener noreferrer'>
                <img src='images/taxi_services.PNG' alt='taxi' className='h-80 rounded-md'/>
              </a>
            </div>
            <div className='border-2 border-inherit border-solid rounded-md' style={{height:"340px", width:"420px"}}>
            <a href='https://www.chennaicalltaxi.in/' target='_blank' rel='noopener noreferrer'>
                <img src='images/calltaxi.PNG' alt='taxi' className='h-80 rounded-md'/>
              </a>
            </div>
          </div>
          <div className='border-2 border-inherit border-solid rounded-md' style={{height:"700px", width:"900px"}}>
          <a href='https://hoteltheroyalphular.com/' target='_blank' rel='noopener noreferrer'>
                <img src='images/hotelbooking.PNG' alt='taxi' style={{height:"700px", width:"900px"}} className='rounded-md'/>
              </a>
          </div>
        </div>
        <div className='mt-6'>
          <div style={{height:"350px", width:"100%"}} className='border-2 border-inherit border-solid rounded-md'>
          <a href='https://bizzoppo.com/' target='_blank' rel='noopener noreferrer'>
                <img src='images/interious.PNG' alt='taxi' style={{height:"350px", width:"100%"}} className='rounded-md'/>
              </a>
          </div>
          <div className='flex flex-row gap-4 justify-between mt-6'>
            <div style={{height:"350px", width:"50%"}} className='border-2 border-inherit border-solid rounded-md'>
            <a href='https://shamunsflowers.com/' target='_blank' rel='noopener noreferrer'>
                <img src='images/flowers.PNG' alt='taxi' style={{height:"350px", width:"100%"}} className='rounded-md'/>
              </a>
            </div>
            <div style={{height:"350px", width:"50%"}} className='border-2 border-inherit border-solid rounded-md'>
            <a href='https://www.magnoliabakery.com/' target='_blank' rel='noopener noreferrer'>
                <img src='images/bakery.PNG' alt='taxi' style={{height:"350px", width:"100%"}} className='rounded-md'/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
