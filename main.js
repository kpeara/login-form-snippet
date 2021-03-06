// login field tailwind css component
Vue.component("app-login-field", {
    props: ['color', 'label', 'field_type'],
    template: `
    <div class="flex justify-center">
    <div :class="'flex justify-center m-4 border-8 border-' +  color + '-900 rounded-full'">
        <label for="label" :class="'flex items-center bg-' + color + '-300 w-40 capitalize px-4 py-2 rounded-l-full text-' + color + '-900'">{{ label }}</label>
        <div class="bg-white rounded-r-full">
            <input id="label" :placeholder="'your ' + label" class="capitalize m-4" :type="field_type">
        </div>
        </div>
    </div>
    `
})

var app = new Vue({
    el: "#app",
    data: {
        loginColor: "purple" // default color
    }
})