export default {
    install (Vue) {
        Vue.mixin({
            created () {
                let freezeArr = this.$options.freeze || [];

                freezeArr.forEach(freezeAttr => Object.freeze(this[freezeAttr]));
            },
        });
    },
};
