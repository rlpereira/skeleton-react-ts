import React from 'react'
import Profile from './Profile'
import Skeleton from './Skeleton'

export interface ListProps {
  data: any[];
  loading: boolean;
}

const List: React.SFC<ListProps> = (props: ListProps) => {
  const { loading, data } = props

  return (
    <ul className='contentWrapper'>
      {loading &&
        new Array(5).fill(1).map((_, i) => {
          return <Skeleton key={i} />
        })}
      {data &&
        data.length > 0 &&
        data.map((item) => (
          <Profile
            key={item.id}
            id={item.id}
            avatar={item.avatar}
            firstName={item.first_name}
            lastName={item.last_name}
            email={item.email}
          />
        ))}
    </ul>
  )
}

export default List
