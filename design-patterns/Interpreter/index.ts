// The Interpreter Pattern Concept

interface IAbstractExpression {
  // All Terminal and Non-Terminal expressions will implement
  // an `interpret` method
  interpret(): number;
}

class Numeral implements IAbstractExpression {
  // Terminal Expression

  value: number;

  constructor(value: string) {
    this.value = parseInt(value);
  }

  interpret(): number {
    return this.value;
  }
}

class Add implements IAbstractExpression {
  // Non-Terminal Expression.
  left: IAbstractExpression;
  right: IAbstractExpression;

  constructor(left: IAbstractExpression, right: IAbstractExpression) {
    this.left = left;
    this.right = right;
  }

  interpret() {
    return this.left.interpret() + this.right.interpret();
  }
}

class Subtract implements IAbstractExpression {
  // Non-Terminal Expression.
  left: IAbstractExpression;
  right: IAbstractExpression;

  constructor(left: IAbstractExpression, right: IAbstractExpression) {
    this.left = left;
    this.right = right;
  }

  interpret() {
    return this.left.interpret() - this.right.interpret();
  }
}
