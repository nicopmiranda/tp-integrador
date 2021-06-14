import Vue from 'vue'

Vue.filter('currency', function (value) {
    if (!value) return ''
    value = Number(value)
    if (!isNaN(value)) {
        return new Intl.NumberFormat('currency').format(value)
    }
    return value
})