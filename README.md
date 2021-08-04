# capacitor-simplebackgroundtimer

A simple background timer for Capacitor

## Install

```bash
npm install capacitor-simplebackgroundtimer
npx cap sync
```

## API

<docgen-index>

* [`startInterval(...)`](#startinterval)
* [`stopInterval(...)`](#stopinterval)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### startInterval(...)

```typescript
startInterval(options: { interval: number; }) => Promise<{ value: boolean; }>
```

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ interval: number; }</code> |

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

--------------------


### stopInterval(...)

```typescript
stopInterval(options: Record<string, never>) => Promise<{ value: boolean; }>
```

| Param         | Type                                 |
| ------------- | ------------------------------------ |
| **`options`** | <code>{ [x: string]: never; }</code> |

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

--------------------

</docgen-api>
