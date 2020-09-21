import React from 'react'
import { HotTable, HotColumn, HotColumnProps } from '@handsontable/react'
import HOT from 'handsontable'
import { Font } from '@procore/core-react'

import 'handsontable/dist/handsontable.min.css'

const sourceDataObject = [
  {
    category: 'Best Rock Performance',
    artist: 'foo',
    title: 'foo',
    label: 'foo',
    __children: [
      {
        title: 'foo',
        artist: 'Alabama Shakes',
        label: 'foo',
        __children: [
          {
            title: "Don't Wanna Fight",
            label: 'ATO Records',
          },
          {
            title: 'Does This Exist',
            label: 'ATO Records',
          },
        ],
      },
      {
        title: 'What Kind Of Man',
        artist: 'Florence & The Machine',
        label: 'Republic',
      },
      {
        title: 'Something From Nothing',
        artist: 'Foo Fighters',
        label: 'RCA Records',
      },
      {
        title: "Ex's & Oh's",
        artist: 'Elle King',
        label: 'RCA Records',
      },
      {
        title: 'Moaning Lisa Smile',
        artist: 'Wolf Alice',
        label: 'RCA Records/Dirty Hit',
      },
    ],
  },
  {
    category: 'Best Metal Performance',
    __children: [
      {
        title: 'Cirice',
        artist: 'Ghost',
        label: 'Loma Vista Recordings',
      },
      {
        title: 'Identity',
        artist: 'August Burns Red',
        label: 'Fearless Records',
      },
      {
        title: '512',
        artist: 'Lamb Of God',
        label: 'Epic Records',
      },
      {
        title: 'Thank You',
        artist: 'Sevendust',
        label: '7Bros Records',
      },
      {
        title: 'Custer',
        artist: 'Slipknot',
        label: 'Roadrunner Records',
      },
    ],
  },
  {
    category: 'Best Rock Song',
    __children: [
      {
        title: "Don't Wanna Fight",
        artist: 'Alabama Shakes',
        label: 'ATO Records',
      },
      {
        title: "Ex's & Oh's",
        artist: 'Elle King',
        label: 'RCA Records',
      },
      {
        title: 'Hold Back The River',
        artist: 'James Bay',
        label: 'Republic',
      },
      {
        title: 'Lydia',
        artist: 'Highly Suspect',
        label: '300 Entertainment',
      },
      {
        title: 'What Kind Of Man',
        artist: 'Florence & The Machine',
        label: 'Republic',
      },
    ],
  },
  {
    category: 'Best Rock Album',
    __children: [
      {
        title: 'Drones',
        artist: 'Muse',
        label: 'Warner Bros. Records',
      },
      {
        title: 'Chaos And The Calm',
        artist: 'James Bay',
        label: 'Republic',
      },
      {
        title: 'Kintsugi',
        artist: 'Death Cab For Cutie',
        label: 'Atlantic',
      },
      {
        title: 'Mister Asylum',
        artist: 'Highly Suspect',
        label: '300 Entertainment',
      },
      {
        title: '.5: The Gray Chapter',
        artist: 'Slipknot',
        label: 'Roadrunner Records',
      },
    ],
  },
]

function FontRendererComponent(props: any) {
  // The avaiable renderer-related props are:
  // - row (row index)
  // - col (column index)
  // - prop (column property name)
  // - TD (the HTML cell element)
  // - cellProperties (the cellProperties object for the edited cell)
  console.log(props)
  return <Font {...props}>value: {props.value}</Font>
}

export const HandsonTable = (props: any) => {
  // const columns: ColumnSettings["columns"]
  const [tableState, setTableState] = React.useState<HOT.GridSettings>({
    autoRowSize: false,
    autoColumnSize: false,
    colHeaders: ['Category', 'Artist', 'Title', 'Album', 'Label'],
    rowHeaders: true,
    nestedRows: true,
    contextMenu: true,
    data: sourceDataObject,
  })

  return (
    <HotTable settings={tableState}>
      <HotColumn width={250}>
        <FontRendererComponent hot-renderer />
      </HotColumn>
      <HotColumn width={250}>
        <FontRendererComponent hot-renderer />
      </HotColumn>
      <HotColumn width={250}>
        <FontRendererComponent hot-renderer />
      </HotColumn>
      <HotColumn width={250}>
        <FontRendererComponent hot-renderer />
      </HotColumn>
      <HotColumn width={250}>
        <FontRendererComponent hot-renderer />
      </HotColumn>
      <HotColumn width={250}>
        <FontRendererComponent hot-renderer />
      </HotColumn>
    </HotTable>
  )
}
