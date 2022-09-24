import React from 'react'
import FooterFour from '../component/About/FooterFour'
// import Events from '../component/Events/Events'
import InvolvedHero from '../component/GetInvolved/InvolvedHero'
import InvolvedSubsection1 from '../component/GetInvolved/InvolvedSubsection1'
import InvolvedSubsection3 from '../component/GetInvolved/InvolvedSubsection3'


function GetinvolvePage() {
  return (
    <>
<InvolvedHero/>
<InvolvedSubsection1/>
<InvolvedSubsection3/>
{/* <Events/> */}
<FooterFour/>
    </>
  )
}

export default GetinvolvePage