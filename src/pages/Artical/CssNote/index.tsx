import React from 'react'
import MarkdownSlice from '../../../components/MarkdownSlice'

export default function CssNote() {
  return (
    <MarkdownSlice src='/mdFiles/cssNote/note.md' alt={'loading...'} languageSubset={['css']}/>
  )
}
