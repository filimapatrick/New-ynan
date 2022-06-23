import React from 'react'
// import GridGallery from '../../../my-monday/src/Component/GridGallery'
import FooterFour from '../component/About/FooterFour'
import Gallery1 from '../component/Gallery/Gallery1'
import Gallery2 from '../component/Gallery/Gallery2'

function GalleryPage() {
  return (
    <div>
        <Gallery1/>
        <Gallery2/>
         {/* <GridGallery/> */}
        <FooterFour/>
    </div>
  )
}

export default GalleryPage