import React from 'react';

class CVDownloadButton extends React.Component {
  handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'images/hansraj.pdf'; // Replace with the actual path to your PDF file
    link.download = 'Hansraj Yadav.pdf'; // Name of the file when downloaded
    link.click(); // Simulate a click to trigger download
  }

  render() {
    return (
      <div className="relative duration-500 [transform:rotate3d(20_,-10,_1,_60deg)]  hover:-rotate-0  group border border-sky-900 border-4  overflow-hidden rounded-2xl relative h-48 w-96 bg-sky-800 p-5 flex flex-col items-start gap-4">
        <div className="text-gray-50">
          <span className="font-bold text-4xl">Hansraj Yadav</span>
          <p className=" font-medium text-xl">Full Stack Developer</p>
        </div>
        <button className="duration-300 hover:bg-sky-900 border hover:text-gray-50 bg-gray-50 font-semibold text-sky-800 px-3 py-2 flex flex-row items-center gap-3" onClick={this.handleDownload}>Download CV 
          <svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height="100" className="w-6 h-6 fill-current">
            <path fillRule="evenodd" d="M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z">
            </path>
          </svg>
        </button>

        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-125 duration-500 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2  fill-gray-50 stroke-sky-900"><path strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M50.4 51C40.5 49.1 40 46 40 44v-1.2a18.9 18.9 0 0 0 5.7-8.8h0.1c3 0 3.8-6.3 3.8-7.3s0.1-4.7-3-4.7C53 4 30 0 22.3 6c-5.4 0-5.9 8-3.9 16-3.1 0-3 3.8-3 4.7s0.7 7.3 3.8 7.3c1 3.6 2.3 6.9 4.7 9v1.2c0 2 0.5 5-9.5 6.8S2 62 2 62h60a14.6 14.6 0 0 0-11.6-11z" data-name="layer1"></path></svg>

        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-125 duration-200 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2  fill-gray-50 stroke-sky-700"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M50.4 51C40.5 49.1 40 46 40 44v-1.2a18.9 18.9 0 0 0 5.7-8.8h0.1c3 0 3.8-6.3 3.8-7.3s0.1-4.7-3-4.7C53 4 30 0 22.3 6c-5.4 0-5.9 8-3.9 16-3.1 0-3 3.8-3 4.7s0.7 7.3 3.8 7.3c1 3.6 2.3 6.9 4.7 9v1.2c0 2 0.5 5-9.5 6.8S2 62 2 62h60a14.6 14.6 0 0 0-11.6-11z" data-name="layer1"></path></svg>
      </div>
    );
  }
}

export default CVDownloadButton;
