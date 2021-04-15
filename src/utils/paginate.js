const paginate = (query, params ) => {
  const { page, PAGESIZE } = params
  console.log(page, PAGESIZE)
  const offset = page * PAGESIZE
  const limit = PAGESIZE
  return {
    ...query,
    offset,
    limit
  }
}

module.exports = paginate