
const options = {
    style: 'currency',
    unit: 'celsius',
    currency: 'EUR',
    useGrouping: true
  }
  
  const num = 5782785434.49
  console.log('US:', new Intl.NumberFormat('en-US', options).format(num))
  console.log('BR:', new Intl.NumberFormat('pt-BR', options).format(num))
  console.log('GER:', new Intl.NumberFormat('de-DE', options).format(num))
  console.log('SYR:', new Intl.NumberFormat('ar-SY', options).format(num))
  console.log('BROWSER:', new Intl.NumberFormat(navigator.language, options).format(num))