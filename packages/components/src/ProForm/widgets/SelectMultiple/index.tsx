import React, { useState } from 'react';
import { Input, Popover, Menu, Icon, Loader } from 'uiw';
import { FormOptionsProps } from '../../type';

export interface SelectMultipleProps {
  // 下拉项集合
  option?: FormOptionsProps[];
  // 变化回调 返回所有选中的项
  onChange?: (selectedList?: FormOptionsProps[]) => void;
  // 选中后回调 返回当前选中的项
  onSelect?: (selected?: FormOptionsProps | null) => void;
  // 搜索回调
  onSearch?: (name?: string) => void;
  // 失去焦点回调
  onBlur?: () => void;
  // 删除后毁掉
  onClear?: (selectedList?: FormOptionsProps[]) => void;
  // 值
  value?: FormOptionsProps[];
  // 是否展示删除
  allowClear?: boolean;
  loading?: boolean;
  disabled?: boolean;
  placeholder?: string;
  // 无数据展示
  noContent?: React.ReactNode;
  // 是否允许搜索
  showSearch?: boolean;
  // 上传最大上限
  maxCount?: number;
}

function SelectMultiple(
  this: import('../../type').Fields,
  {
    option = [],
    onChange,
    onSelect,
    onSearch,
    onBlur,
    onClear,
    value = [],
    loading = true,
    disabled = false,
    placeholder = '请选择',
    allowClear = false,
    noContent,
    showSearch = false,
    maxCount = 3,
  }: SelectMultipleProps,
) {
  // 选中的集合
  const [selectedItems, setSelectedItems] = useState<FormOptionsProps[]>(value);
  // 搜索内容
  const [searchValue, setSearchValue] = useState('');
  // 是否是搜索状态
  const [isSearch, setIsSearch] = useState(false);

  // 是否已达上限
  const isMax = selectedItems.length === maxCount;

  // 选择下拉项
  const handleOnChange = (selected: FormOptionsProps) => {
    let selKeys = [...selectedItems];
    const findKey = selKeys.find((v) => v.value === selected.value);
    if (!findKey && !isMax) {
      selKeys.push(selected);
    } else {
      selKeys = selKeys.filter((ele) => ele.value !== selected.value);
    }
    setSelectedItems(selKeys);
    onChange?.(selKeys);
    onSelect?.(selected);
  };

  const handleInput = (type: 'blur' | 'search' | 'clean', { target }: any) => {
    if (type === 'search') {
      setIsSearch(true);
      setSearchValue(target.value);
      onSearch?.(target.value);
    }
    if (type === 'blur') {
      setSearchValue('');
      setIsSearch(false);
      onBlur?.();
    }
    if (type === 'clean') {
      setSearchValue('');
      setSelectedItems([]);
      setIsSearch(false);
      onClear?.([]);
    }
  };

  const contentShow = () => {
    const optionNotEmpty = option && option.length > 0;
    // 有数据
    if (optionNotEmpty) {
      return (
        <Menu
          style={{
            minHeight: 25,
            maxHeight: 150,
            overflowY: 'scroll',
            width: 200,
          }}
        >
          {option.map((opt: FormOptionsProps, idx) => {
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
                disabled={opt.disabled}
                onClick={(e: any) => {
                  setIsSearch(false);
                  e.preventDefault();
                  handleOnChange(opt);
                }}
              />
            );
          })}
        </Menu>
      );
    }
    return noContent ? (
      noContent
    ) : (
      <Loader loading={loading} color="black">
        <div
          style={{
            padding: 10,
            height: 70,
            width: 200,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 12,
            color: '#888',
          }}
        >
          <Icon type="file-unknown" style={{ fontSize: 20 }} />
          暂无数据
        </div>
      </Loader>
    );
  };

  // input的value值
  const inputValue = React.useMemo(() => {
    const content =
      (selectedItems &&
        selectedItems.length > 0 &&
        selectedItems.map((item) => item.label)) ||
      [];
    return isSearch ? searchValue : content.join(';');
  }, [selectedItems, searchValue, isSearch]);

  // 渲染icon
  function renderSelectIcon() {
    if (!isSearch && allowClear && selectedItems.length > 0) {
      return 'close';
    }
    if (isSearch && loading) {
      return 'loading';
    }
    return 'search';
  }

  return (
    <Popover
      trigger="focus"
      placement="bottomLeft"
      content={contentShow()}
      visibleArrow={false}
    >
      <Input
        readOnly={!showSearch}
        disabled={disabled}
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => handleInput('search', e)}
        onBlur={(e) => handleInput('blur', e)}
        addonAfter={
          <Icon
            type={renderSelectIcon()}
            spin={loading}
            onClick={
              renderSelectIcon() === 'close'
                ? handleInput.bind(this, 'clean')
                : undefined
            }
          />
        }
      />
    </Popover>
  );
}

export default SelectMultiple;
