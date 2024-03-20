import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

function CollapsibleTree ({ data }) {
  const svgRef = useRef()

  useEffect(() => {
    const width = 600
    const height = 600

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)

    const treeLayout = d3.tree().size([width, height])

    const root = d3.hierarchy(data)
    treeLayout(root)

    const link = svg.selectAll('.link')
      .data(root.links())
      .enter().append('path')
      .attr('class', 'link')
      .attr('d', d3.linkHorizontal()
        .x(d => d.y)
        .y(d => d.x))

    const node = svg.selectAll('.node')
      .data(root.descendants())
      .enter().append('g')
      .attr('class', 'node')
      .attr('transform', d => `translate(${d.y},${d.x})`)

    node.append('circle')
      .attr('r', 5)

    node.append('text')
      .attr('dy', '0.31em')
      .attr('x', d => d.children ? -6 : 6)
      .attr('text-anchor', d => d.children ? 'end' : 'start')
      .text(d => d.data.name)

    return () => {
      // Clean up any D3 elements if needed
    }
  }, [data])

  return <svg ref={svgRef} />
}

export default CollapsibleTree
