import React, { useState } from 'react';
import { Input, Popover, Menu, Icon } from 'uiw';
import { FormItemsOptionsProps } from '../../type';

export interface SelectMultipleProps {
  option?: FormItemsOptionsProps[];
  onChange?: (selected: FormItemsOptionsProps[]) => void;
  value?: FormItemsOptionsProps[];
  // onSearch?: (v: string) => void;
  // placeholder?: string;
  // defaultValue?: string | Number;
}

function SelectMultiple({
  option = [],
  onChange,
  value = [],
  ...others
}: SelectMultipleProps) {
  const [selectedItems, setSelectedItems] =
    useState<FormItemsOptionsProps[]>(value);

  // 选择下拉项
  const handleOnChange = (selected: FormItemsOptionsProps) => {
    let selKeys = [...selectedItems];
    const findKey = selKeys.find((v) => v.value === selected.value);
    if (!findKey) {
      selKeys.push(selected);
    } else {
      selKeys = selKeys.filter((ele) => ele.value !== selected.value);
    }
    setSelectedItems(selKeys);
    onChange?.(selKeys);
  };

  const resetSelectedValue = () => {
    setSelectedItems([]);
    onChange?.([]);
  };

  // input的value值
  const inputValue = React.useMemo(() => {
    const content =
      (selectedItems &&
        selectedItems.length > 0 &&
        selectedItems.map((item) => item.label)) ||
      [];
    return content.join(';');
  }, [selectedItems]);

  const contentShow = () => {
    return (
      <Menu
        style={{
          minHeight: 25,
          maxHeight: 280,
          overflowY: 'scroll',
          width: 200,
        }}
      >
        {option &&
          option.map((opt: FormItemsOptionsProps, idx) => {
            const active: boolean =
              selectedItems &&
              selectedItems.findIndex((item) => item.value === opt.value) !==
                -1;
            return (
              <Menu.Item
                style={{ marginBottom: option.length - 1 === idx ? 0 : 5 }}
                active={active}
                key={opt.value}
                text={opt.label}
                onClick={(e: any) => {
                  e.preventDefault();
                  handleOnChange(opt);
                }}
              />
            );
          })}
      </Menu>
    );
  };

  return (
    <Popover
      trigger="focus"
      placement="bottomLeft"
      content={contentShow()}
      visibleArrow={false}
    >
      <Input
        style={{ overflowX: 'scroll' }}
        readOnly={true}
        value={inputValue}
        addonAfter={
          <Icon
            type="close"
            style={{ color: '#a5a5a5', fontSize: 16 }}
            onClick={resetSelectedValue}
          />
        }
      />
    </Popover>
  );
}

export default SelectMultiple;
