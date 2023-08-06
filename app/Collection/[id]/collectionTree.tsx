import { useCallback, useState } from "react";
import { NewCollectionCreateds, NewNFTCreateds } from "@/lib/type";
import React from "react";
import Tree, { Point } from "react-d3-tree";

import { CollectionCard } from "./collections";
import "./custom-tree.css";
import { getTreeData } from "./util";

export const useCenteredTree = (
  defaultTranslate = { x: 0, y: 0 }
): [Point, React.LegacyRef<HTMLDivElement>] => {
  const [translate, setTranslate] = useState<Point>(defaultTranslate);
  const containerRef = useCallback((containerElem) => {
    if (containerElem !== null) {
      const { width, height } = containerElem.getBoundingClientRect();
      setTranslate({ x: width / 2, y: 0 });
    }
  }, []);
  return [translate, containerRef];
};

export default function App(props: {
  data: NewNFTCreateds[];
  collectionItem?: NewCollectionCreateds;
  className?: string;
}) {
  const treeData = getTreeData(props.data);
  // const classes = useStyles();
  const [translate, containerRef] = useCenteredTree();
  const nodeSize = { x: 400, y: 400 };
  const separation = { siblings: 1, nonSiblings: 2 };
  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: -125 };
  // Here we're using `renderCustomNodeElement` render a component that uses
  // both SVG and HTML tags side-by-side.
  // This is made possible by `foreignObject`, which wraps the HTML tags to
  // allow for them to be injected into the SVG namespace.
  const renderForeignObjectNode = ({
    nodeDatum,
    toggleNode,
    foreignObjectProps,
  }) => {
    // console.log("nodeDatum", nodeDatum);

    return (
      <>
        {/* `foreignObject` requires width & height to be explicitly set. */}
        <foreignObject {...foreignObjectProps}>
          <CollectionCard
            data={nodeDatum.attibutes}
            collectionItem={props.collectionItem}
          />
        </foreignObject>
      </>
    );
  };

  return (
    <div className="h-screen w-full" ref={containerRef}>
      <Tree
        data={treeData}
        translate={translate}
        nodeSize={nodeSize}
        separation={separation}
        pathFunc="step"
        pathClassFunc={() => "custom-link"}
        zoomable={false}
        // draggable={false}
        zoom={1}
        renderCustomNodeElement={(rd3tProps) =>
          renderForeignObjectNode({
            ...rd3tProps,
            foreignObjectProps,
          })
        }
        orientation="vertical"
      />
    </div>
  );
}
