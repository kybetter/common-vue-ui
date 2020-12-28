export default {
  bind(el, binding) {
    function documentHandler(e) {
      if (el.contains(e.target)) {
        return false;
      }
      binding.value(e);
    }
    el['__clickoutside__'] = documentHandler;
    document.addEventListener('click', documentHandler);
  },
  unbind(el) {
    document.removeEventListener('click', el['__clickoutside__']);
    delete el['__clickoutside__'];
  }
};
