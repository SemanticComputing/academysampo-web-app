import axios from 'axios'
import querystring from 'querystring'
// const defaultConstructHeaders = {
//   'Content-Type': 'application/x-www-form-urlencoded',
//   'Accept': 'text/turtle'
// };

export const networkQueryHeaders = {'Authorization': 'Basic c2Vjbzpsb2dvczAz'}

export const runSelectQuery = async ({
  query,
  endpoint,
  resultMapper,
  previousSelections = null,
  resultFormat
}) => {
  const MIMEtype = resultFormat === 'json'
    ? 'application/sparql-results+json; charset=utf-8'
    : 'text/csv; charset=utf-8'
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: MIMEtype,
    'Authorization': 'Basic c2Vjbzpsb2dvczAz'
  }
  const q = querystring.stringify({ query })
  try {
    const response = await axios({
      method: 'post',
      headers: headers,
      url: endpoint,
      data: q
    })
    if (resultFormat === 'json') {
      const mappedResults = resultMapper(response.data.results.bindings, previousSelections)
      return {
        data: mappedResults,
        sparqlQuery: query
      }
    } else {
      return response.data
    }
  } catch (error) {
    if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
      console.log(error.response.data)
    // console.log(error.response.status);
    // console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request)
    } else {
    // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message)
    }
    console.log(error.config)
  }
}