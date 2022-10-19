import axios from 'axios'

const baseUrl = import.meta.env.VITE_API_URL

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const create = async newObject => {
  const res = await axios.post(baseUrl, newObject)
  return res.data
}
const update = async (id, newObject) => {
  const res = await axios.put(`${baseUrl}${id}`, newObject)
  return res.data
}
const deleteItem = async id => {
  const res = await axios.delete(`${baseUrl}${id}`)
  return res.data
}

const templatesService = {
  getAll,
  create,
  update,
  deleteItem,
}

export default templatesService
