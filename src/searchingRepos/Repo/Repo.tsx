import React from 'react';

export const Repo = (props: any) => {
  const repo = props.repo
  return <div>
    <div>
      {repo.name}
    </div>
  </div>
}