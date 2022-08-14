import React from "react";
import "./index.css";

export default function Footer () {
    return (
        <footer className='Footer'>
            <div className='info'>
                <div>
                    <div className='flex-two'>
                        <a target="_blank" rel='noreferrer' href="https://icons8.com">icons8</a>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#3ddab4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z" /><path fill="#fff" d="M11,10h13v28H11V10z" /><path fill="#fff" d="M31,10c-3.866,0-7,3.134-7,7s3.134,7,7,7s7-3.134,7-7S34.866,10,31,10z M31,24c-3.866,0-7,3.134-7,7 s3.134,7,7,7s7-3.134,7-7S34.866,24,31,24z" /></svg>
                    </div>
                    <div className='flex-two'>
                        <a target='_blank' rel='noreferrer' href='https://github.com/Wegt-meoh'>
              github
                        </a>
                        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true">
                            <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                    </div>
                </div>

                <div className='flex-two'>
                    <svg viewBox="64 64 896 896" focusable="false" data-icon="copyright" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z"></path></svg>
                    <a target='_blank' rel='noreferrer' href="http://beian.miit.gov.cn/">浙ICP备2022003490号</a>
                </div>
            </div>
        </footer>
    );
}
