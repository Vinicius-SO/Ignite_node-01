export function buildRoutePath(path){
    const routeParameteresRegex = /:([a-zA-Z]+)/g

    console.log(Array.from(path.matchAll(routeParameteresRegex)))
    // return new RegExp()
} 