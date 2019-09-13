
import Vue from 'vue'
import Vuex from 'vuex'

import Bus from './../common/event.bus'
import Fjord from './../common/fjord'

import CrudShow from './../components/Crud/CrudShow';
import CrudIndex from './../components/Crud/CrudIndex';
import CrudActionPreview from './../components/Crud/CrudActionPreview';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Notifications from 'vue-notification';
import VModal from 'vue-js-modal';
import { ServerTable, ClientTable, Event } from 'vue-tables-2';
import CKEditor from '@ckeditor/ckeditor5-vue';
import BootstrapVue from 'bootstrap-vue';
import VueI18n from 'vue-i18n'
import VueCodemirror from 'vue-codemirror'
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';

export default function VueBootstrap() {

    // components
    Fjord.components(require.context('./../components/FormFields/', true, /\.(js|vue)$/i))
    Fjord.components(require.context('./../components/Fjord/', true, /\.(js|vue)$/i))
    Fjord.components(require.context('./../components/Indexes/', true, /\.(js|vue)$/i))
    Fjord.components(require.context('./../components/Test/', true, /\.(js|vue)$/i))
    Fjord.components(require.context('./../components/Modals/', true, /\.(js|vue)$/i))

    Vue.component('crud-index', CrudIndex);
    Vue.component('crud-show', CrudShow);
    Vue.component('crud-action-preview', CrudActionPreview);
    Vue.component('vue-ctk-date-time-picker', VueCtkDateTimePicker);

    // FontAwesome
    library.add(far);
    library.add(fas);
    library.add(fab);
    Vue.component('fa-icon', FontAwesomeIcon)

    // Modules
    Vue.use(Vuex)
    Vue.use(BootstrapVue)
    Vue.use(Notifications);
    Vue.use(VModal);
    Vue.use(ClientTable);
    Vue.use(CKEditor);
    Vue.use(BootstrapVue)
    Vue.use(VueI18n)

    // you can set default global options and events when use
    // https://www.npmjs.com/package/vue-codemirror
    Vue.use(VueCodemirror, /* {
        options: { theme: 'base16-dark', ... },
        events: ['scroll', ...]
    } */)


    // prototypes
    Vue.prototype.$bus = Bus;

}

VueBootstrap()
