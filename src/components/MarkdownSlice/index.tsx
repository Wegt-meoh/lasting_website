import axios from 'axios';
import hljs from 'highlight.js';
import { marked } from 'marked';
import React, { useEffect, useState } from 'react'

import './index.css'


interface MarkdownSliceProps {
    theme?: 'light' | 'dark',
    src: string,
    alt: string,
    languageSubset: string[]
}

export default function MarkdownSlice(props: MarkdownSliceProps) {
    const {
        theme = 'light',
        src,
        alt,
        languageSubset = [],
    } = props
    const [content, setContent] = useState(alt)
    const [classNames, setClassNames] = useState<string>()

    useEffect(() => {
        marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true, // 允许 Git Hub标准的markdown.
            pedantic: false, // 不纠正原始模型任何的不良行为和错误（默认为false）
            highlight: function (code) {
                return hljs.highlightAuto(code, languageSubset).value;
            },
            sanitize: false, // 对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
            breaks: true, // 允许回车换行（该选项要求 gfm 为true）
            smartLists: true, // 使用比原生markdown更时髦的列表
            smartypants: false, // 使用更为时髦的标点
        })
        axios.get(src).then(value => {
            const { data } = value
            setContent(marked(data))
        }).catch(e => {
            console.log(e)
        })
    }, [src, languageSubset])

    return (     
        <div dangerouslySetInnerHTML={{ __html: content }} className='md' />
    )
}
