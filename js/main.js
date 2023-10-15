console.log('Hello world')

// var tempMap = "charts/tempMap.json"
// console.log(tempMap)

async function getJson(path) {
  const response = await fetch(path, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })
  const responseJson = await response.json()
  return responseJson
}

async function main() {
  const tempMap = await fetch('charts/test/test1.json')
  console.log(tempMap)
  vegaEmbed('#tempMap', tempMap, { actions: false })
}

// main()

;(async () => {
  const tempMapJson = await getJson('charts/test/test2.vg.json')
  console.log(tempMapJson)
//   vegaEmbed('#tempMap', tempMapJson, { actions: false })

  const seaLevelJson = await getJson('charts/seaLevelChart.vg.json')
  vegaEmbed('#seaLevelChart', seaLevelJson)

  const powerMethodJson = await getJson('charts/powerMethodChart.vg.json')
  vegaEmbed("#powerMethodChart", powerMethodJson)

//   const tempJson = await getJson('charts/test/test1.vg.json')
  const tempJson = await getJson('charts/tempMap.vg.json')
  vegaEmbed("#tempMapChart", tempJson)
})()
