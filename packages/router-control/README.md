@uiw-admin/router-control
----


```typescript
interface ControllerProps {
  /** 是否为 hash 路由 */
  isHashRouter?: boolean;
  routes?: Routers[];
  /**
   * 加载 models
   */
  loadModels?: (models: string[]) => Promise<any>[];
}
```