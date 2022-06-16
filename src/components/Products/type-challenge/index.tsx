import React from 'react'

export default function TypeChallenge() {

    // 类型体操
    // 第一题：假如泛型变量T是 () => infer R的`子集`，那么返回 通过infer获取到的函数返回值，否则返回boolean类型
    // 原文：https://www.songma.com/news/txtlist_i64599v.html
    type IsFunc<T> = T extends () => infer R ? R : never
    type Func = IsFunc<''>
    type Func2 = IsFunc<number>
    type Func3 = IsFunc<() => number>
    type Func4 = IsFunc<() => Promise<unknown>>
    // 第二题：当a、b为相同类型的时候，返回此类型否则never(changed)
    type IsSameAB<T> = T extends { a: infer TypeA, b: infer TypeB } ?
        ([TypeA] extends [TypeB] ?
            ([TypeB] extends [TypeA] ? TypeA : never)
            : never)
        : never
    type SameAB = IsSameAB<number>
    type SameAB2 = IsSameAB<{ a: string, b: number }>
    type SameAB3 = IsSameAB<{ a: number, b: number }>
    // 范型extends用于传入类型约束
    type MyReturnType<T extends (...arg: any[]) => any> = T extends (...arg: any[]) => infer R ? R : any
    type Func5 = () => string
    type returnType = MyReturnType<Func5>
    // type returnType2 = MyReturnType<number>  

    return (
        <div>TypeChallenge</div>
    )
}
