export function assertFC<P>(component: React.FC<P>): asserts component is React.FC<P> {
  // We don't need to add any code here since the assertion happens on the type level
}