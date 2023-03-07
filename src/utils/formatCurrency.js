const formatCurrency = (item) =>{
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item)    
}
export default formatCurrency

