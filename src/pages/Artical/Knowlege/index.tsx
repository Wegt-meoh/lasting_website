import React from 'react'
import MarkdownSlice from '../../../components/MarkdownSlice'

export default function Knowlege() {
  return (
    <MarkdownSlice src={'/mdFiles/knowlage/home.md'} alt={'loading'} languageSubset={['ts','python']}/>
  )
}
