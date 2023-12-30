const formatNumber = (data: any) => {
  return new Intl.NumberFormat('pt-BR').format(data)
}

export default formatNumber
