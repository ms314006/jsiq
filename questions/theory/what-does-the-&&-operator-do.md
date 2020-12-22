---
id: 3
title: What does the `&&` operator do?
editLink: https://github.com/sakhnyuk/jsiq/blob/master/questions/theory-questions/2.md

---

# What does the && operator do?

The `&&` or Logical AND operator finds the first falsy expression in its operands and returns it and if it does not find
any falsy expression it returns the last expression. It employs short-circuiting to prevent unnecessary work. I've used
this in the `catch` block when closing database connection in one of my projects.

```javascript
console.log(false && 1 && []); //logs false
console.log(" " && true && 5); //logs 5
```

Using if statements.

```javascript
const router: Router = Router();

router.get('/endpoint', (req: Request, res: Response) => {
  let conMobile: PoolConnection;
  try {
    //do some db operations
  } catch (e) {
    if (conMobile) {
      conMobile.release();
    }
  }
});
```

Using && operator.

```javascript
const router: Router = Router();

router.get('/endpoint', (req: Request, res: Response) => {
  let conMobile: PoolConnection;
  try {
    //do some db operations
  } catch (e) {
    conMobile && conMobile.release()
  }
});
```

