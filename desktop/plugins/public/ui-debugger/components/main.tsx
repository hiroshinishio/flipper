/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React, {useState} from 'react';
import {PerfStatsEvent, plugin} from '../index';
import {
  DataTable,
  DataTableColumn,
  Layout,
  usePlugin,
  useValue,
} from 'flipper-plugin';
import {Tree} from 'antd';
import type {DataNode} from 'antd/es/tree';
import {DownOutlined} from '@ant-design/icons';
import {useHotkeys} from 'react-hotkeys-hook';
import {Id, UINode} from '../types';

function nodesToAntTree(root: Id, nodes: Map<Id, UINode>): DataNode {
  function uiNodeToAntNode(id: Id): DataNode {
    const node = nodes.get(id);
    return {
      key: id,
      title: node?.name,
      children: node?.children.map((id) => uiNodeToAntNode(id)),
    };
  }

  return uiNodeToAntNode(root);
}

function formatDiff(start: number, end: number): string {
  const ms = end - start;
  return `${ms.toFixed(0)}ms`;
}

export const columns: DataTableColumn<PerfStatsEvent>[] = [
  {
    key: 'txId',
    title: 'TXID',
  },
  {
    key: 'nodesCount',
    title: 'Total nodes',
  },
  {
    key: 'start',
    title: 'Start',
    onRender: (row: PerfStatsEvent) => {
      console.log(row.start);
      return new Date(row.start).toISOString();
    },
  },
  {
    key: 'scanComplete',
    title: 'Scan time',
    onRender: (row: PerfStatsEvent) => {
      return formatDiff(row.start, row.scanComplete);
    },
  },
  {
    key: 'serializationComplete',
    title: 'Serialization time',
    onRender: (row: PerfStatsEvent) => {
      return formatDiff(row.scanComplete, row.serializationComplete);
    },
  },
  {
    key: 'socketComplete',
    title: 'Socket send time',
    onRender: (row: PerfStatsEvent) => {
      return formatDiff(row.serializationComplete, row.socketComplete);
    },
  },
];

export function Component() {
  const instance = usePlugin(plugin);
  const rootId = useValue(instance.rootId);
  const nodes = useValue(instance.nodes);

  const [showPerfStats, setShowPerfStats] = useState(false);

  useHotkeys('ctrl+i', () => setShowPerfStats((show) => !show));

  if (showPerfStats)
    return (
      <DataTable<PerfStatsEvent>
        dataSource={instance.perfEvents}
        columns={columns}
      />
    );

  if (rootId) {
    const antTree = nodesToAntTree(rootId, nodes);
    return (
      <Layout.ScrollContainer>
        <Tree
          showIcon
          showLine
          onSelect={(selected) => {
            console.log(nodes.get(selected[0] as string));
          }}
          defaultExpandAll
          expandedKeys={[...nodes.keys()]}
          switcherIcon={<DownOutlined />}
          treeData={[antTree]}
        />
      </Layout.ScrollContainer>
    );
  }

  return <div>Nothing yet</div>;
}
