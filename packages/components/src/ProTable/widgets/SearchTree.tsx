import React from 'react';
import { SearchTree } from 'uiw';
import { TreeData } from '@uiw/react-tree';

interface SearchTreeProps {
  option?: TreeData[];
}

const SearchTreePro: React.FC<SearchTreeProps> = ({ option, ...others }) => {
  return <SearchTree options={option} {...others} />;
};

export default SearchTreePro;
