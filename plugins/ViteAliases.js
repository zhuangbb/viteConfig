

import path from 'path'
import fs from 'fs'

/**
 * 
 * @param keyName 自定义符号
 * @returns resultObj
 */
function getTotalSrcDir(keyName){
    const basePath= '../src'
    const dirName = fs.readdirSync(path.resolve(__dirname,basePath))
    const restlt = diffDirAndFile(dirName,basePath)

    const resultObj = {}
    restlt.dir.forEach((dirName) => {
        resultObj[`${keyName}${dirName}`] = path.resolve(__dirname,basePath + "/"+dirName)
    })
    resultObj[`${keyName}`] = path.resolve(__dirname,basePath)
    return resultObj
}
/**
 * @license MIT
 * @author bobzhuang
 * @param {*} dirArr 目录下的所有文件夹集合
 * @param {*} basePath 基础路径 /src/
 * @returns src目录下文件夹和文件的集合 []
 */
function diffDirAndFile(dirArr = [],basePath){
    const res = {
        dir:[],
        // file:[]
    }
    dirArr.forEach(name => {
        const fileState = fs.statSync(path.resolve(__dirname,basePath + "/" + name))
        if(fileState.isDirectory()){
            res.dir.push(name)
        }
        // else {
        //     res.file.push(name)
        // }
    })
    return res
}
module.exports = ({
    keyName = '@'
}) => {
    return {
        config(config,env){
            const aliasesObj = getTotalSrcDir(keyName)
            console.log(aliasesObj)
            return {
                resolve:{
                    alias:aliasesObj
                }
            }
        }
    }
}
