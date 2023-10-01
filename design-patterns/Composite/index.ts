abstract class Component {
  protected parent: Component | null;

  /**
   * The base Component can sometimes be used to declare an 
   * interface for setting and accessing a parent of the component 
   * in a tree structure. It can also provide a default 
   * implementation for these methods
   */
  public setParent(parent: Component | null): void {
    this.parent = parent;
  }

  public getParent(): Component | null {
    return this.parent;
  }

  /**
   * Come composite classes will define child-management 
   * operations in the base class. This means concrete 
   * classes don't need to expose these new methods but 
   * leaf-level components will often not do anything with them.
   */
  public add(component: Component): void {
    return;
  }

  public remove(component: Component): void {
    return;
  }

  /**
   * Sometimes the Component can define a method that lets the 
   * client code figure out if it can have child components
   */
  public isComposite(): boolean {
    /**
     * The default implementation for the abstract class. 
     * The concrete class will override this depending on 
     * its implementation.
     */
    return false;
  }

  /**
   * The base Component can implement some default behavior or 
   * leave it to the concrete classes. This can be done via 
   * abstract methods
   */
  abstract operation(): string;
}

/**
 * A Leaf class is the end object of a composition. 
 * A leaf should not have any children.
 * 
 * A leaf usually does all the actual work, whereas 
 * Composite objects should delegate the work to their sub-components.
 */
class Leaf extends Component {
  public operation(): string {
    return "I am a Leaf!";
  }
}

class Composite extends Component {
  protected children: Component[] = [];

  /**
   * A Composite can add or remove children
   * both simple and complex to or from its child list.
   */
  public add(component: Component): void {
    this.children.push(component);
    component.setParent(this);
  }

  public remove(component: Component): void {
    const componentIndex = this.children.indexOf(component);
    this.children.splice(componentIndex, 1);

    component.setParent(null);
  }

  /**
   * Since this is a Composite class, we will override the default
   * implementation of isComposite(...) to return true
   */
  public isComposite(): boolean {
    return true;
  }

  /**
   * This override is an example of a composite operation that uses the children list.
   */
  public operation(): string {
    const results: string[] = [];

    for (const component of this.children) {
      results.push(component.operation());
    }

    return `Branch: ${results.join('+')}`;
  }

};