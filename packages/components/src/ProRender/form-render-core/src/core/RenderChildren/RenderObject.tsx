import React from 'react';
import Core from '../index';
// import { Descriptions } from 'uiw';
import { RenderObjectProps } from '../interface';

const RenderObject: React.FC<RenderObjectProps> = ({
  children = [],
  readType,
  dataIndex = [],
  displayType,
  hideTitle,
}) => {
  // if (readType === 'description') {
  //   return (
  //     <Descriptions bordered size="small">
  //       {children.map(({ child, flatten }, i) => {
  //         const FRProps = {
  //           displayType,
  //           id: child,
  //           dataIndex,
  //           hideTitle,
  //         };
  //         return (
  //           <Descriptions.Item key={i.toString()} label={flatten[child].schema.title}>
  //             <Core {...FRProps} readType={readType} />
  //           </Descriptions.Item>
  //         );
  //       })}
  //     </Descriptions>
  //   );
  // }

  return (
    <>
      {children.map(({ child }, i) => {
        const FRProps = {
          displayType,
          id: child,
          dataIndex,
          hideTitle,
        };
        return <Core key={i.toString()} {...FRProps} readType={readType} />;
      })}
    </>
  );
};

export default RenderObject;
