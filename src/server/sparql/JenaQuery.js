import { runSelectQuery } from './SparqlApi'
import { prefixes } from './as/SparqlQueriesPrefixes'
import { jenaQuery } from './SparqlQueriesGeneral'
import { makeObjectList } from './SparqlObjectMapper'
import { endpoint } from './as/FacetConfigsAs'

export const queryJenaIndex = async ({
  queryTerm,
  resultFormat
}) => {
  let q = jenaQuery
  q = q.replace('<QUERY>', `
  ?id text:query ('${queryTerm.toLowerCase()}' 2000) .
  `)
  const results = await runSelectQuery({
    query: prefixes + q,
    endpoint: endpoint,
    resultMapper: makeObjectList,
    resultFormat
  })
  return results
};
