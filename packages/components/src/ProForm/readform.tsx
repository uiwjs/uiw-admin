import { Descriptions } from 'uiw';
import { ProFormProps } from './type';
import { getReadValue } from './utils/index';

export default ({ title, formDatas, readOnlyProps }: ProFormProps) => {
  return (
    <Descriptions bordered title={title} {...readOnlyProps}>
      {formDatas?.map(
        (
          {
            hide,
            label,
            widget,
            initialValue = '',
            option = [],
            readSpan = 1,
            widgetProps = {},
          },
          index,
        ) => {
          return hide ? null : (
            <Descriptions.Item span={readSpan} label={label} key={index}>
              {getReadValue(widget, initialValue, option, widgetProps)}
            </Descriptions.Item>
          );
        },
      )}
    </Descriptions>
  );
};
