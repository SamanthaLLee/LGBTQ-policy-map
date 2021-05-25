import React, { useState } from 'react'
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation
} from "react-simple-maps";
import Link from 'next/link'
import { getAllStateData } from '../lib/state'
import allStates from "../public/data/allstates.json";

// const [tooltipContent, setTooltipContent] = useState("");

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21]
};

const MapChart = ({ allStateIds, setTooltipContent, numBills }) => {

  const max = Math.max.apply(null, Object.values(numBills));
  let colormap = require('colormap')
  let colors = colormap({
      colormap: 'summer',
      nshades: max+10,
      format: 'hex',
      alpha: 1
  })

  console.log(colors)

  return (
    <ComposableMap data-tip="" projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) => ( 
          <>
            {geographies.map(geo => (
              <Link href={`/state/${findStateIdByVal(allStateIds, geo.id).params.id}`}>
              <Geography
                key={geo.rsmKey}
                stroke="#FFF"
                geography={geo}
                onMouseEnter={() => {
                  // const { NAME, POP_EST } = geo.properties;
                  // setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                  // setTooltipContent("test");
                }}
                onMouseLeave={() => {
                  // setTooltipContent("");
                }}
                style={{
                  default: {
                    fill: colors[max-numBills[findStateIdByVal(allStateIds, geo.id).params.id]],
                    outline: "none"
                  },
                  hover: {
                    fill: "#F53",
                    outline: "none"
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none"
                  }
                }}
              /></Link>
            ))}
            {geographies.map(geo => {
              const centroid = geoCentroid(geo);
              const cur = allStates.find(s => s.val === geo.id);
              return (
                <g key={geo.rsmKey + "-name"}>
                  {cur &&
                    centroid[0] > -160 &&
                    centroid[0] < -67 &&
                    (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                      <Marker coordinates={centroid}>
                        <text y="2" fontSize={14} textAnchor="middle">
                          {cur.id}
                        </text>
                      </Marker>
                    ) : (
                      <Annotation
                        subject={centroid}
                        dx={offsets[cur.id][0]}
                        dy={offsets[cur.id][1]}
                      >
                        <text x={4} fontSize={14} alignmentBaseline="middle">
                          {cur.id}
                        </text>
                      </Annotation>
                    ))}
                </g>
              );
            })}
          </>
        )}
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;

function findStateIdByVal(allStateIds, val) {
  return allStateIds.find((element) => {
    return element.params.val === val;
  })
}