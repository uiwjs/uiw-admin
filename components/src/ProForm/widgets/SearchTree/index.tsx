import React from 'react';
import { SearchTree, SearchTreeProps, TreeData } from 'uiw';

const FormSearchTree: React.FC<
  SearchTreeProps<any> & { option: TreeData[] }
> = ({ option, ...others }) => {
  return <SearchTree options={option} {...others} />;
};

export default FormSearchTree;
