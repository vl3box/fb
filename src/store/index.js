import Vue from "vue";
import Vuex from "vuex";
import { getAppID } from "@jx3box/jx3box-common/js/utils";
import map from "@jx3box/jx3box-data/data/fb/fb_map.json";
import {default_zlp ,default_fb} from '../../setting.json'

Vue.use(Vuex);

let store = {
    state: {
        // client
        client: location.href.includes("origin") ? "origin" : "std",
        // post
        id: getAppID(),
        user_id: 0,
        post: "",
        // list
        map,
        fb: "",
        zlp: "",
        luaindex: {},
        default_zlp: location.href.includes("origin") ? default_zlp.origin : default_zlp.std,
        default_fb: location.href.includes("origin") ? default_fb.origin : default_fb.std,

        // collections
        collectionInfo: '',
        maptree : ''
    },
    mutations: {
        switchClient: function(state, val) {
            state.client = val || "std";
        },
        SET_COLLECTION: function (state, val) {
            state.collectionInfo = val
        }
    },
    getters: {},
    actions: {},
    modules: {},
};

export default new Vuex.Store(store);
