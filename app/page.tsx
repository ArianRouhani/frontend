'use client'
import Start from './_components/Start'
import CompaniesSwiper from './_components/CompaniesSwiper'
import Explore from './_components/Explore'
import More from './_components/More'
import Custom from './_components/Custom'
import Stories from './_components/Stories'
import Recommended from './_components/Recommended'
import Card from './_components/Card'
export default function Home() {
  return (
    <main>
      <Start />
      <CompaniesSwiper />
      <Explore />
      <More />
      <Custom />
      <Stories/>
      <Recommended/>
      <Card/>
    </main>
  )
}


