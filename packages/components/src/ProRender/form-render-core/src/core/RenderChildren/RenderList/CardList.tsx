/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Core from '../../index';
import { Button } from 'uiw'; // Popconfirm
// import ArrowDown from '../../../components/ArrowDown';
import { Icon } from 'uiw';
// import { CloseOutlined, CopyOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { CardListProps } from '../../interface';

let window: any;

const CardList: React.FC<CardListProps> = ({
  displayList = [],
  listData,
  changeList,
  schema,
  deleteItem,
  copyItem,
  addItem,
  moveItemUp,
  moveItemDown,
  displayType,
  getFieldsProps,
}) => {
  // eslint-disable-next-line no-unused-vars
  const { props = {}, itemProps } = schema;

  console.log('itemProps', itemProps);

  let addBtnProps = {
    type: 'dashed',
    children: '新增一条',
    style: {
      backgroundColor: '#3364e9',
    },
  };

  if (props.addBtnProps && typeof props.addBtnProps === 'object') {
    addBtnProps = { ...addBtnProps, ...props.addBtnProps };
  }

  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
    <>
      <div className="fr-card-list">
        {displayList.map((item, idx) => {
          const fieldsProps: any = getFieldsProps(idx);
          fieldsProps.displayType = displayType;
          return (
            <div
              className={`fr-card-item ${
                displayType === 'row' ? 'fr-card-item-row' : ''
              }`}
              key={idx}
            >
              <div className="fr-card-index">{idx + 1}</div>
              <Core {...fieldsProps} />
              <div className="fr-card-toolbar">
                {!props.hideMove && (
                  <>
                    <Icon
                      type="arrow-up"
                      style={{ fontSize: 16, marginLeft: 4 }}
                      onClick={() => moveItemUp(idx)}
                    />
                    <Icon
                      type="arrow-down"
                      style={{ fontSize: 16, marginLeft: 4 }}
                      onClick={() => moveItemDown(idx)}
                    />
                  </>
                )}
                {!props.hideAdd && !props.hideCopy && (
                  <Icon
                    type="minus"
                    style={{ fontSize: 16, marginLeft: 8 }}
                    onClick={() => copyItem(idx)}
                  />
                )}
                {!props.hideDelete && (
                  // <Popconfirm title="确定删除?" onConfirm={() => deleteItem(idx)} okText="确定" cancelText="取消">
                  <div onClick={() => deleteItem(idx)}>
                    <Icon
                      type="close"
                      style={{ fontSize: 16, marginLeft: 8 }}
                    />
                  </div>
                  // </Popconfirm>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: displayList.length > 0 ? 0 : 8 }}>
        {!props.hideAdd ? (
          // @ts-ignore
          <Button onClick={addItem} {...addBtnProps} />
        ) : null}
        {Array.isArray(props.buttons)
          ? props.buttons.map((item: any, idx: number) => {
              const { callback, text, html } = item;
              let onClick = () => {
                // console.log({
                //   value: listData,
                //   onChange: changeList,
                //   schema,
                // });
              };
              if (typeof window[callback] === 'function') {
                onClick = () => {
                  window[callback]({
                    value: listData,
                    onChange: changeList,
                    schema,
                  });
                };
              }
              return (
                <Button
                  key={idx.toString()}
                  style={{ marginLeft: 8 }}
                  onClick={onClick}
                >
                  <span dangerouslySetInnerHTML={{ __html: html || text }} />
                </Button>
              );
            })
          : null}
      </div>
    </>
  );
};

export default CardList;
