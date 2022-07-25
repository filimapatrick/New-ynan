import React from 'react'
// import GridGallery from '../../../my-monday/src/Component/GridGallery'
import FooterFour from '../component/About/FooterFour'
import Gallery1 from '../component/Gallery/Gallery1'
import Gallery2 from '../component/Gallery/Gallery2'
import Gallery3 from '../component/Gallery/Gallery3'
import Gallery4 from '../component/Gallery/Gallery4'
import Gallery5 from '../component/Gallery/Gallery5'

function GalleryPage() {
  return (
    <div>
        <Gallery1/>
        {/* <Gallery2/> */}
        <Gallery3/>
        <Gallery4/>
        <Gallery5/>
         {/* <GridGallery/> */}
        {/* <FooterFour/> */}
    </div>
  )
}

export default GalleryPage