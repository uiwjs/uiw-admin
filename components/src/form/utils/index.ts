import { Rule, ComFormProps } from '../interface';
/**
 * 1. 必填   空字符/空数组/null/undefined/{}
 *
 * **/
const validatorEmpty = (value: unknown) => {
  if (typeof value === 'number') {
    return true;
  }
  if (typeof value === 'string') {
    return !!value;
  }
  if (Array.isArray(value)) {
    return !!value.length;
  }
  if (typeof value === 'function') {
    return true;
  }
  if (typeof value === 'boolean') {
    return true;
  }
  if (Object.prototype.toString.call(value) === '[object Object]') {
    return !!Object.keys(value as object).length;
  }
  return !!value;
};

export const validator = (values: any, rules: Record<string, Rule[]>) => {
  const error: Record<string, unknown> = {};
  Object.entries(rules).forEach(([key, ruleItems]) => {
    if (ruleItems) {
      const value = values[key];
      const fileRulesError = ruleItems
        .map((rule) => {
          if (typeof rule === 'function') {
            return rule(value);
          }
          if (rule && typeof rule === 'object') {
            if (rule.required && !validatorEmpty(value)) {
              return rule.message;
            }
            if (rule.pattern instanceof RegExp) {
              return rule.pattern.test(value);
            }
          }
          return false;
        })
        .filter(Boolean);
      if (fileRulesError.length) {
        error[key] = fileRulesError;
      }
    }
  });
  return error;
};

export const getRules = (fields: ComFormProps['fields']) => {
  const validatorrules: Record<string, any> = {};
  Object.entries(fields || {}).map(([key, item]) => {
    if (item.rules) {
      validatorrules[key] = item.rules;
    }
  });
  return validatorrules;
};
