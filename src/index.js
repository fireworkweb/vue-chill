export default {
    install (Vue) {
        Vue.mixin({
            created () {
                let chillArr = this.$options.chill || [];

                chillArr.forEach(chillAttr => Object.freeze(this[chillAttr]));
            },
        });
    },
};
