import axios from 'axios'

const baseUrls = {
  templates: import.meta.env.VITE_API_TEMPLATES_URL,
  stylesheets: import.meta.env.VITE_API_STYLESHEETS_URL,
}

const getUrl = service => baseUrls[service] || baseUrls.templates

const getAll = async service => {
  const url = getUrl(service)
  const res = await axios.get(url)
  return res.data
}

const create = async (service, newObject) => {
  const url = getUrl(service)
  const res = await axios.post(url, newObject)
  return res.data
}
const update = async (service, id, newObject) => {
  const url = getUrl(service)
  const res = await axios.put(`${url}${id}`, newObject)
  return res.data
}
const deleteItem = async (service, id) => {
  const url = getUrl(service)
  const res = await axios.delete(`${url}${id}`)
  return res.data
}

const apiService = {
  getAll,
  create,
  update,
  deleteItem,
}

export default apiService
