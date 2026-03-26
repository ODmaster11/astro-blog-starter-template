---
title: "JavaScript ES6+ Features ที่นักพัฒนาต้องรู้"
description: "เรียนรู้เกี่ยวกับ JavaScript ES6+ features ที่สำคัญ เช่น arrow functions, destructuring"
pubDate: 2026-03-18
heroImage: "/blog-placeholder-2.jpg"
---

## บทนำ

JavaScript ES6 ได้นำเสนอการเปลี่ยนแปลงครั้งใหญ่ต่อภาษา

## Arrow Functions

Arrow functions เป็นวิธีที่กระชับในการเขียน functions:

```javascript
const add = (a, b) => a + b;
```

## Destructuring

Destructuring ช่วยให้คุณสามารถแยกค่าจาก objects และ arrays:

```javascript
const { name, age } = person;
const [first, second] = colors;
```

## Template Literals

Template literals ช่วยให้การสร้าง strings ง่ายขึ้น:

```javascript
const greeting = `Hello, ${name}!`;
```

## Classes

Classes ให้วิธีที่ชัดเจนในการสร้าง objects:

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}
```

## บทสรุป

ES6+ features เหล่านี้ช่วยให้เขียน JavaScript ที่ทันสมัยและมีประสิทธิภาพ
