/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preserve that ability, always export from Quest to regenerate this file.
 *   To setup element attributes and CSS properties, use the Quest web app
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { styled } from '@mui/material/styles';
import TableCellRow from 'src/components/TableCellRow/TableCellRow';
import { EntityInfoTableProps } from 'src/types';

const EntityInfoTable1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: 'auto',
});

const Row1: any = styled(TableCellRow)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Row2: any = styled(TableCellRow)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Row3: any = styled(TableCellRow)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Row4: any = styled(TableCellRow)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Row5: any = styled(TableCellRow)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Row6: any = styled(TableCellRow)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

function EntityInfoTable(props: EntityInfoTableProps): JSX.Element {
  return (
    <EntityInfoTable1 className={props.className}>
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
      <Row5 />
      <Row6 />
    </EntityInfoTable1>
  );
}

export default EntityInfoTable;
