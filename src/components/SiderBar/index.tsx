import React from 'react'
import { Link } from 'react-router-dom'
import { changeThemeAction } from '../../store/features/theme/thmemActions'
import { useAppDispatch } from '../../store/hooks/hook'
import './index.css'

export default function SiderBar() {
  const dispatch = useAppDispatch()

  return (
    <div className='siderbar' id='SiderBar'>
      <div className='innerbar'>
        <nav className='brand'>
          <Link to='/'>
            <span>Lasting</span>
          </Link>
        </nav>
        <nav>
          <Link to='/artical'>
            <img src="data:image/png;base64,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"/>
            <span>Aritical</span>
          </Link>
          <Link to='/product'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAD3UlEQVRoge2Y309bZRjHP09bQqFOKdlkRm9Yl5FgoowJwxuj/FjG1Av4F5ZxIcSxTL3YxdJl0bulBy+WMVliYtQI/tgWIplZxwUXcxTJsgSiZtMl7mKRCYHNcdrS83hRkQZ62Gl7GmLST9KLvn3e50ff5/n27YESJUqU2ErEDSeRG+abIjIIPO9wyz0V7TnW5B8rNLanUAcAInIO58kDvCAqg27EdqWArcSVAlS0B7iXw5Y/BO1xI7YrM7CKMRlXJ3b9zeWuxS210FZTKmCr8RXL8Ys7POyu9nB73mJmzipWmOKdwO5qDz6BULC4h1w077fnLVYU7swX79uHIrbQzFxxW2eV//0QlwpYJRIze9evPfeUcCjk5VDIy87A2u3BmEy841ZcVwqIxMx2UTHWr++t8VBRJlSUCXt3ZobSgUjMbHcjdsEFGDGzTpBhchMEnyDDZ26YewqNX1ABZyc0KCqXUYLZPp++b7GcVB4nlen76xRJCXpFLp+d0Kx7nZL3tTY8rr5gIDmmaEGtIMjVhb/LOsNvyEo++/M+gapAfKDQ5AEUbQ8Gkhvmxyl5FWDEzD4Q15RE0d58lSnnFjJiZgcq36Pqq/8mStnjeD5x/yMZ8DPb3QoiKyraeazJfzWX/TkVYMTMOpDrKMF957+lcehibtnaMH2ki5+OdIGwkLK05fh+/69O9zpuoUzFqb0Wo/HCpax2sj+E98s+vF/0Ic0hR74bhy4S+uHHvJTJUQHhcfUlypMjCnu2/3yX18PnQbP/f/cc7YTt22DHNjz9B51locprp4d4duYOQF2iPPlVeFwd/a44KqAqEB8Abat8sMiB9yL4zDz63utB325AT3Wj4S70rQbwroX3xRN0vG8QmFsAtMOpMj2xgFXF8SaSdHxgEPhzYVN7yxiDuYcwt4QVWXtyqJ0vQWs9PO2HZyqgrT69lkHlg0UOHDfwmXHHyrTpEGcqTuvJc4SuXH+SP1v0VHc6+UweLiMnv9tg+1tbM9GPekFkRbAOHm2uiNr5tT2BSMzchabvOI0XLhWUPJB9Zqzsc7QrOknDp6MAPhXPyMdTpq0a2BYgKh8CVbXXYuz7ZOO3lDNTv2dZu2tr/srg19SOT4EStFJy2s5ukxnQNoCWyOe2ipMLMnYLorOwuJx+RWfTa3b2lvLqmc/+fSNtdnabSJX4AcSF5AFIWcjoTRi96XiLSnpEBS23s7E/ASEKMHHiMI9qqh0HdYtHNdVMnDgMgAVX7OxsVSjz2lCE/HLhL4+Vani3pTLr43vbE+hv8v+S0tTLCCPAUtHSs2dJYXiz5EuUKFFi6/kHmU1dLACBiqQAAAAASUVORK5CYII="/>
            <span>Product</span>
          </Link>
        </nav>
        <nav>
          <a target='_blank' rel='noreferrer' href='https://github.com/Wegt-meoh'>
            <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true">
              <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
          <a onClick={e => { dispatch(changeThemeAction()) }}>
            <img src="data:image/png;base64,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"/>
          </a>
        </nav>
      </div>
    </div>
  )
}
