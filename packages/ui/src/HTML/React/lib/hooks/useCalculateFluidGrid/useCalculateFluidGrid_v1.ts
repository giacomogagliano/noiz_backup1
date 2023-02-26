import {
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";

const getParentSize = useEffect;

const rows = 14;
const columns = 8;

type ParentSize = {
  width?: number;
  height?: number;
};

export interface useCalculateFluidGrid_v1 {
  (): [number, number, RefObject<HTMLDivElement>, number];
}

export function useCalculateFluidGrid_v1(): [
  number,
  number,
  RefObject<HTMLDivElement>,
  number
] {
  const [blockSize, setBlockSize] = useState(0);
  const [width, setWidth] = useState(0);
  const itemsArea =
    useRef<HTMLDivElement>() as RefObject<HTMLDivElement>;
  getParentSize(() => {
    if (itemsArea.current) {
      const parent_ = itemsArea.current.parentElement;
      if (parent_) {
        const clientRec = parent_.getBoundingClientRect();
        if (clientRec.height && clientRec.width) {
          const height = clientRec.height;
          const width = clientRec.width;
          const parentSize: ParentSize = { height, width };
          if (
            parentSize.height &&
            parentSize.height !== 0
          ) {
            const SCALE = 1000000000000;
            const ratio = parentSize.height / rows;
            const blockSize =
              Math.round(ratio * SCALE) / SCALE;
            const width = blockSize * columns;
            setBlockSize(blockSize);
            setWidth(width);
          }
        }
      }
    }
  }, []);

  return [blockSize, width, itemsArea, columns];
}
