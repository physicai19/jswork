const fs = require('fs')
const https = require('https')
const cherrio = require('cherrio')
const child_process = require('child_process')
const querystring = require('querystring')
const readline = require('readline')
const iconv = require('iconv-lite')
const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require('constants')
const rl = readline.createInterface({
    input:process.stdin
})
let buf = []
rl.on('line',(line)=>{
    if(line.trim()=='') rl.close()
    buf.push(line)
})
rl.on('close',()=>{
    vcode = buf[0].trim()
    console.log('验证码是：',vcode)
    login()
})
let