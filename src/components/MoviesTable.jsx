import { useMemo } from 'react'
import movies from '../MOVIE_DATA.json'
import BasicTable from './BasicTable'

export default function MoviesTable() {
  const data = useMemo(() => movies, [])

  const columns = [
    {
      header: 'ID',
      accessorKey: 'id',
    },
    {
      header: 'Name',
      accessorKey: 'name',
    },
    {
      header: 'Genre',
      accessorKey: 'genre',
    },
    {
      header: 'Rating',
      accessorKey: 'rating',
    },
  ]

  return (
    <>
      <h1>Movies</h1>
      < BasicTable data={data} columns={columns} />
    </>
  )
}
  