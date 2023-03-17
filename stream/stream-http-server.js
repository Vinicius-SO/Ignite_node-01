import http from "node:http"
import { Transform } from 'node:stream'

class InverseNumberStream extends Transform{
    _transform(chunck, encoding, callback){
        const transformedNumber = Number(chunck.toString()) * -1 

        console.log(transformedNumber);        

        callback(null, Buffer.from(transformedNumber.toString()))
    }
}

// req ==> ReadableStream
//res ==> WritableStream

const server = http.createServer(async (req,res)=>{

    const buffers = []

    for await (const chunck of req ){
        buffers.push(chunck)
    }

    const fullStreamBuffer = Buffer.concat(buffers).toString()

    return res.end(fullStreamBuffer)
    
})

server.listen(3334)