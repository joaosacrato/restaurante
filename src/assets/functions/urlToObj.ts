export default function urlToObj(url:string) {

    let a = ''
    a = url.replaceAll('?', '')

    // transforma em um array do tipo ['massa_1=spaguetti', '1=3']
    let b = a.split('&')
    let obj = {}
    

    b.forEach((e) => {
      // transforma em uma aray do tipo ['massa_1', 'spaguetti']
      let c = e.split('=')

      obj = {...obj, [c[0]]: c[1]}
    })

    return obj

  }