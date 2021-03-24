export default {
  props: ['vnode'],
  render(h) {
    // use slot
    if (
      (Array.isArray(this.vnode) && this.vnode[0] instanceof this.$vnode.constructor) ||
      this.vnode instanceof this.$vnode.constructor
    ) {
      return this.vnode;
    }
    // use createComponent function
    if (typeof this.vnode === 'function') {
      return this.vnode(h);
    }
    // use a component
    if (typeof this.vnode === 'object') {
      return h(this.vnode);
    }
  }
};
