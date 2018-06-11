function alphaRange(start, end) {
    // const alpharr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'v']
    // const firstIndex = 0;
    // const lastIndex = 0;
    let firstIndex = start.charCodeAt(0)
    let lastIndex = end.charCodeAt(0)
    // const result = "";
    const newarr = [];
    for (let i = firstIndex; i <=  lastIndex; i +=1) {
        var res = String.fromCharCode(i);
        newarr.push(res);
    }
    return newarr;
 }
 
 
 console.log(alphaRange('a', 'f')) // returns ['a', 'b', 'c', 'd', 'e', 'f']
 console.log(alphaRange('d', 'h')) // returns ['d', 'e', 'f', 'g', 'h']