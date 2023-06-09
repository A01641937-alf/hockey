import React from 'react'

export const Videos = () => {
  return (
    <div>
        <h1 className='tituloVideos'>Top 5 Mejores peleas de la NHL</h1>
        <ul>
          <li>Top 5
            <iframe width="560" height="315" src="https://www.youtube.com/embed/aZXO4zLwNkA" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </li>
          <li>Top 4
            <iframe width="560" height="315" src="https://www.youtube.com/embed/bmm_cve2JQA" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </li>
          <li>Top 3
            <iframe width="560" height="315" src="https://www.youtube.com/embed/nK3yNgktCLk"
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </li>
          <li>Top 2
            <iframe width="560" height="315" src="https://www.youtube.com/embed/QIgfbfaTtLY" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </li>
          <li>Top 1
            <iframe width="560" height="315" src="https://www.youtube.com/embed/py5a999-rqA" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </li>
        </ul>
    </div>
  )
}

export default Videos