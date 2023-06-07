import React from 'react'
import { useRouter } from 'next/router'

const AboutId = () => {
    const router = useRouter()
    const id = router.query.id

  return (
    <div>AboutId = {id} </div>
  )
}

export default AboutId