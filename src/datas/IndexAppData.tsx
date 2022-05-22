interface IndexAppDataType {
    destination: string
    title: string
    cover: string
    desc: string
}

let dataList: Array<IndexAppDataType> = [
    { destination: '/app/reviewForCollegeClass', title: 'test for docsify component', desc: '用于测试自定义组件', cover: '/images/椭圆曲线的加法.png' },
    { destination: '/app/rgba2hex', title: 'rgb to hex', desc: '一款rgb和十六进制转换的工具useless', cover: '/images/椭圆曲线的加法.png' },
    { destination: '/app/recommendBooks', title: '推荐书单', desc: '推荐书籍', cover: '/images/椭圆曲线的加法.png' },
    { destination: '/app/know ', title: 'ecc', desc: '椭圆曲线加密算法', cover: '/images/椭圆曲线的加法.png' },
    { destination: '/app/ref ', title: 'ref practice', desc: 'useRef的练习', cover: '/images/椭圆曲线的加法.png' },
    { destination: '/app/login ', title: 'login demo', desc: '拟态样式登录界面', cover: '/images/椭圆曲线的加法.png' },
]

function getAllLink(): Array<IndexAppDataType> {
    return dataList
}

export { type IndexAppDataType as IndexLinkData, getAllLink }