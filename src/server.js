import http from 'node:http'
import { Database } from './database.js'
import { randomUUID as uuid} from 'node:crypto'

import { json } from './middlewares/json.js'

const database = new Database()

const server = http.createServer(async (req,res)=>{

    const { method, url } = req

    await json(req,res)

    const route = route.find(route =>{
        return route.method === method && route.path === url
    })    

    if(route){
        return route.handler(req,res)
    }

    return res.writeHead(404).end()

    
})

server.listen(3333) 