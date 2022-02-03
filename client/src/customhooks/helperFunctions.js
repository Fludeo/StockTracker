export default function ARSConverter(amount){
    const result = Intl.NumberFormat('es-AR', {
        currencyDisplay: 'symbol',
        style: 'currency',
        currency: 'ARS'
      }).format(amount)
return result;
}