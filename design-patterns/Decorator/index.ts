/**
 * Base Component interface that defines operations that 
 * can be altered by decorators.
 */
interface Component {
  operation(): string;
};

/**
 * Concrete Components will provide default implementations 
 * of the operations. There can be multiple variants of
 * these classes.
 */
class ConcreteComponent implements Component {
  public operation(): string {
    return 'ConcreteComponent'
  }
}

/**
 * The base Decorator class  follows the same interface as
 * the other components. The purpose of this class is to 
 * wrap the interface for all concrete decorators. The
 * default implementation may include a field for storing a
 * wrapped component and the means to initialize it.
 */
class Decorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  /**
   * The Decorator delegates work to the wrapped component.
   */
  public operation(): string {
    return this.component.operation();
  }
}

/**
 * Concrete Decorators call the wrapped object and alter its result in some way.
 */
class ConcreteDecoratorA extends Decorator {
  /**
   * Decorators may call parent implementation of the operation, instead of
   * calling the wrapped object directly. This approach simplifies extension
   * of decorator classes.
   */
  public operation(): string {
    return `ConcreteDecoratorA(${super.operation()})`;
  }
}

/**
* Decorators can execute their behavior either before or after the call to a
* wrapped object.
*/
class ConcreteDecoratorB extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorB(${super.operation()})`;
  }
}