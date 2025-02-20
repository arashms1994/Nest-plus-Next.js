import { userGetCategories } from '@/api/server-api/user/user-category'
import Link from 'next/link'
import React from 'react'

const CategoriesList = async () => {
    const categories = await userGetCategories()
  return (
    <div className='flex gap-2'>{categories.results.map((c)=> <Link href={"/category/" + c.slug}>{c.titleFa}</Link>)}</div>
  )
}

export default CategoriesList